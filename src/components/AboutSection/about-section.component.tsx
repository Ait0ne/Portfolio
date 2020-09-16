import React, { useEffect, useState } from 'react';

import {
    AboutSectionContainer, 
    PersonalInfoSection, 
    Divider, 
    AboutText, 
    PhotoContainer, 
    SkillsSection, 
    SkillsSectionHeader,
    PersonalInfoHeader
} from './about-section.styles';
import AnimatedText from '../AnimatedText/animated-text.component';
import Avatar from '../../assets/avatar.jpg';
import SkillBar from '../SkillBar/skill-bar.component';
import {useInView} from 'react-intersection-observer';
import {Info} from '../../info';
import { useAnimation } from 'framer-motion';

interface AboutSectionProps {
    aboutRef: React.RefObject<HTMLDivElement>
}


const AboutSection : React.FC<AboutSectionProps> = ({aboutRef}) => {
    const {ref, inView} = useInView()
    const [photoRef, photoInView] = useInView()
    const skillsSectionControls= useAnimation()
    const photoControls = useAnimation()
    const [animateSkillBar, setAnimateSkillBar] = useState(false)
    

    useEffect(()=> {
        if (inView) {
            skillsSectionControls.start({
                x: '0%'
            }).then(()=> setAnimateSkillBar(true))
        }
    }, [skillsSectionControls, inView])

    useEffect(() => {
        if (photoInView) {
            photoControls.start({
                rotateY: '0deg'
            })
        }
    }, [photoControls, photoInView])

    return (
        <AboutSectionContainer >
            <PersonalInfoSection>
                <PersonalInfoHeader ref={aboutRef}>
                    <AnimatedText text='About Me' filledSymbols={5}/>
                    <Divider />
                </PersonalInfoHeader>
                <AboutText>
                    I'm a Web-Developer currently located in Moscow, Russia. 
                    I have a serious passion for solving problems and learning new things.
                    Also, i am just addicted to travelling.
                </AboutText>
                <PhotoContainer 
                style={{backgroundImage: `url(${Avatar})`}}
                initial={{rotateY: '90deg'}}
                animate={photoControls}
                transition={{
                    duration: 0.8,
                    ease: 'easeIn'
                    
                }}
                ref={photoRef}
                >
                </PhotoContainer>
            </PersonalInfoSection>
            <SkillsSection
            initial={{x: '100%'}}
            animate={skillsSectionControls}
            transition={{
                duration:1,
                ease: 'easeInOut'
            }}
            ref={ref}
            >
                <SkillsSectionHeader >
                    Skills
                    <Divider />
                </SkillsSectionHeader>
                {
                    Info.skills.map((skill, index) => {
                        return (
                            <SkillBar key={index} title={skill.title} percentage={skill.percentage} inView={animateSkillBar} index={index}/>
                        )
                    })
                }
            </SkillsSection>
        </AboutSectionContainer>
    )
}

export default AboutSection;
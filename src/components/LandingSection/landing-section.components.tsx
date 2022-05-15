import React, { useEffect } from 'react';
import {
    LandingSectionContainer, 
    LandingSectionContent, 
    LandingSectionText, 
    PortfolioButton,
    JobTitle, 
    NameText,
    Block
} from './landing-section.styles';
import BackgroundImage from '../../assets/bg.jpeg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { useWindowDimensions } from '../../hooks/useWindowDimension.hook';
import {useAnimation, motion} from 'framer-motion';
import PlaygroundCanvas from '../Canvas/canvas';

interface landingProps {
    animationEnd: boolean
}


const LandingSection : React.FC<landingProps> = ({animationEnd}) => {
    const {height} = useWindowDimensions()
    const blockAnimation = useAnimation()
    const textAnimation = useAnimation()
    const buttonAnimation = useAnimation()


    useEffect(() => {
        if (animationEnd) {
            setTimeout(()=> {
                textAnimation.start(i => ({
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                        ease: 'easeIn',
                        delay: i*2
                    }
                }))
            }, 800)
            blockAnimation.start(i=> ({
                width: ['0%','100%', '0%' ],
                left: ['0%','0%', '100%'],
                transition: {
                    duration: 1.7,
                    delay: i*2
                }
            }))
            .then(() => {
                buttonAnimation.start({
                    rotateX: '0deg'
                })
            })
        }
    }, [blockAnimation, textAnimation, buttonAnimation, animationEnd])

    const handleNavigation = () => {
        window.scrollTo({
            top: height,
            left: 0,
            behavior: 'smooth'
        })
    }

    

    return (
        <LandingSectionContainer style={{backgroundImage: `url(${BackgroundImage})`}}>
            {/* <LandingSectionContent>
                <LandingSectionText>
                    <NameText>
                        <Block
                        animate={blockAnimation}
                        custom={0}
                        ></Block>
                        <motion.span
                        initial={{opacity: 0}}
                        animate={textAnimation}
                        custom={0}
                        >
                            Hello, I'm <span>Sergey Yukhanov.</span>
                        </motion.span>
                    </NameText>
                    <JobTitle>
                        <Block
                        animate={blockAnimation}
                        custom={1}
                        ></Block>
                        <motion.span
                        initial={{opacity: 0}}
                        animate={textAnimation}
                        custom={1}
                        >
                        I'm a full-stack web developer.
                        </motion.span>
                    </JobTitle>
                </LandingSectionText>
                <PortfolioButton 
                onClick={handleNavigation}
                initial={{rotateX: '90deg'}}
                animate={buttonAnimation}
                transition={{duration: 1}}
                >
                    <span>About Me<FontAwesomeIcon icon={faArrowRight} size='lg'/></span>
                </PortfolioButton>
            </LandingSectionContent> */}
            <PlaygroundCanvas/>
        </LandingSectionContainer>
    )
}

export default LandingSection;

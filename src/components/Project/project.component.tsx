import React, { useEffect } from 'react';


import TechnologiesList from '../TechnologiesList/technologies-list.component';
import {
    ProjectContainer,
    ProjectDescription,
    ProjectTitle,
    DescriptionText,
    ImageContainer
} from './project.styles';
import {IProject} from '../../info';
import {ProjectListProps} from '../ProjectsList/projects-list.component';
import {useInView} from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';


interface ProjectProps {
    project: IProject,
    index: number
}

const variants = {
    visible: {
        x: '0%',
        transition: {
            type: 'spring'
        }
    },
    hover: {
        boxShadow:  '5px 30px 60px rgba(4, 229, 229, 0.5)',
        y: '-20px',
        transition: {
            duration: 0.5
        }
    },
    initial: (index:number) =>  ({
        x: index%2===0?'-100%': '100%',
        boxShadow:  '5px 30px 60px rgba(4, 229, 229, 0.2)'
    })
}

const containerVariants = {
    visible: {
        opacity:1
    }
}

const Project: React.FC<ProjectProps&ProjectListProps> = ({project, index, toggleModal}) => {
    const {images, name, shortDescription, technologies, type} = project
    const {ref, inView} = useInView()
    const imageControls = useAnimation()
    const descriptionControls = useAnimation()

    const toggleExpand = () => {
        toggleModal(project)
    }

    useEffect(()=> {
        if (inView) {
            imageControls.start('visible')
            // descriptionControls.start('visible')
        }
    }, [imageControls, descriptionControls, inView])


    return (
        <ProjectContainer 
        index={index}
        ref={ref}
        animate={imageControls}
        variants={containerVariants}
        >

            <ImageContainer 
            onClick={toggleExpand} 
            type={type}
            // animate={imageControls}
            >
                <motion.img 
                initial='initial'
                variants={variants}
                src={images[0]} 
                alt={name}
                whileHover='hover'
                custom={index}
                />
            </ImageContainer>
            <ProjectDescription
            // animate={descriptionControls}
            initial={{x: index%2===0?'100%': '-100%'}}
            variants={variants}
            >
                <ProjectTitle>
                    {name}
                </ProjectTitle>
                <TechnologiesList   technologies={technologies}/>
                <DescriptionText>
                    {shortDescription}
                </DescriptionText>
            </ProjectDescription>

        </ProjectContainer>
    )
}

export default Project;
import React, { Fragment } from 'react';
import Slider from 'react-slick';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExternalLinkAlt, faTimes} from '@fortawesome/free-solid-svg-icons';


import {
    Backdrop, 
    DescriptionContainer, 
    GalleryContainer,
    ModalContainer,
    ModalFullScreenContainer,
    SliderImage,
    ProjectTitle,
    ProjectDescription,
    CustomButton,
    ProjectButtons,
    ModalContainerInner
} from './project-modal.styles';
import {IProject} from '../../info';
import TechnologiesList from '../TechnologiesList/technologies-list.component';
import GitLogo from '../../assets/git.png';
import { useWindowDimensions } from '../../hooks/useWindowDimension.hook';
import SplitAnimation from '../SplitAnimation/split-animation.component';


interface ProjectProps {
    project: IProject,
    onClose: () => void
}

const ProjectModal: React.FC<ProjectProps> = ({project, onClose}) => {
    const {width, height} = useWindowDimensions()

    const ModalInnerContent = () => (
        <Fragment>
                <FontAwesomeIcon icon={faTimes} onClick={onClose}/>
                <GalleryContainer>
                    <Slider
                    slidesToShow={1}
                    infinite={true}
                    dots={true}
                    speed={500}
                    slidesToScroll={1}
                    arrows={false}
                    >
                        {
                            project.images.map((image, i)=>{
                                return (
                                    <SliderImage key={i} image={image}></SliderImage>
                                )
                            })
                        }
                    </Slider>
                </GalleryContainer>
                <DescriptionContainer>
                        <ProjectTitle>
                            {project.name}
                        </ProjectTitle>
                        <TechnologiesList technologies={project.technologies} />
                        <ProjectDescription>
                            {project.longDescription+' '} 
                            {project.link?<a href={project.link}>here</a>:null}
                        </ProjectDescription>
                        <ProjectButtons>
                            <CustomButton href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                <img width={32} height={32} src={GitLogo} alt='GitHubLogo'/>
                                <span>View on Github</span>
                            </CustomButton>
                            {
                                project.websiteLink?
                                <CustomButton href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faExternalLinkAlt} color='black'/>
                                    <span>View Site</span>
                                </CustomButton>
                                :null
                            }
                        </ProjectButtons>
                </DescriptionContainer>
        </Fragment>
    )


    return(
     <ModalFullScreenContainer>
        <Backdrop onClick={onClose}>
        </Backdrop>
         <ModalContainer>
             <SplitAnimation fixed={false} width={width<768?width:768} height={height*0.9}>
                <ModalContainerInner>
                    <ModalInnerContent/>
                </ModalContainerInner>
             </SplitAnimation>
         </ModalContainer>

    </ModalFullScreenContainer>
 )
}

export default ProjectModal;
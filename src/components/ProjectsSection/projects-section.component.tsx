import React, {useState} from 'react';

import {Divider, ProjectsSectionContainer, ProjectsSectionHeader} from './projects-section.styles';
import AnimatedText from '../AnimatedText/animated-text.component';
import ProjectsList from '../ProjectsList/projects-list.component';
import ProjectModal from '../ProjectModal/project-modal.component';
import {IProject} from '../../info';
import {AnimatePresence} from 'framer-motion';

interface ProjectsSectionProps {
    projectsRef: React.RefObject<HTMLDivElement>
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({projectsRef}) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [modalProject, setModalProject] = useState<IProject|undefined>(undefined)

    const toggleModal = (project?:IProject) => {
        if (project) {
            setModalProject(project)
        } else {
            setModalProject(undefined)
        }
        setModalOpen(c=>!c)
    }

    return (
        <ProjectsSectionContainer ref={projectsRef}>
            <ProjectsSectionHeader>
                <AnimatedText text='Recent Projects' filledSymbols={6} />
                <Divider />
            </ProjectsSectionHeader>
            <ProjectsList toggleModal={toggleModal}/>
            <AnimatePresence>
                {
                    modalOpen&&modalProject?
                    <ProjectModal onClose={toggleModal} project={modalProject}/>
                    :null
                }
            </AnimatePresence>
        </ProjectsSectionContainer>
    )
}


export default ProjectsSection;
import React from 'react';

import {ProjectListsContainer} from './projects-list.styles';
import Project from '../Project/project.component'
import {Info, IProject} from '../../info';

export interface ProjectListProps {
    toggleModal: (project: IProject) => void
}

const ProjectsList: React.FC<ProjectListProps> = ({toggleModal}) => {
    return (
        <ProjectListsContainer>
            {
                Info.Projects.map((project, index) => {
                    return (
                        <Project key={index} project={project} index={index} toggleModal={toggleModal} />
                    )
                })
            }
        </ProjectListsContainer>
    )
}

export default ProjectsList;
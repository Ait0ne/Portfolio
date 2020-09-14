import React from 'react';

import {TechnologiesListContainer, TechnologyContainer} from './technologies-list.styles';

interface TechnologiesProps {
    technologies: string[]
}

const TechnologiesList: React.FC<TechnologiesProps> = ({technologies}) => {
    
    const technology = (name: string, index: number) => (
        <TechnologyContainer key={index}>
            {name}
        </TechnologyContainer>
    )
    
    return (
        <TechnologiesListContainer>
            {
                technologies.map((t, i) => {
                    return technology(t, i)
                })
            }
        </TechnologiesListContainer>
    )
}

export default TechnologiesList;
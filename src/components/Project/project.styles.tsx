import styled from 'styled-components';
import {motion} from 'framer-motion';

interface ProjectContainerProps {
    index: number
}

export const ProjectContainer = styled(motion.div)<ProjectContainerProps>`
display:flex;
flex-direction: ${props=> props.index%2===0? 'row': 'row-reverse'};
margin-bottom: 30px;
width:100%;
color: white;
justify-content: center;
@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
}
`

interface ImageContainerProps {
    type: 'mobile'|'web'
}

export const ImageContainer = styled(motion.div)<ImageContainerProps>`
    max-width: ${props => props.type==='web'? '600px': '200px'};
    width: 60%;
    cursor: pointer;
    transition: all 0.5s ease 0s;
    >img {
        
        max-width: ${props => props.type==='web'? '600px': '200px'};
        width: 100%;
        cursor: pointer;
        box-shadow:  5px 30px 60px rgba(4, 229, 229, 0.2);
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`

export const ProjectDescription = styled(motion.div)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
cursor: default;
width: 40%;
@media (max-width: 768px) {
    width:100%;
    max-width: 50ch;
}
`

export const ProjectTitle = styled.h1`
margin: 0;
text-align: center;
`



export const DescriptionText = styled.p`
color: #ffffffb3;
text-align:center;
`


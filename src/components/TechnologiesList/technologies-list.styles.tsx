import styled from 'styled-components';
import {motion} from 'framer-motion';


export const TechnologiesListContainer = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
align-items: center;
`



export const TechnologyContainer = styled(motion.div)`
min-width: 40px;
margin-right: 3px;
margin-bottom: 3px;
padding: 2px 7px;
color: white;
background-color: rgb(4, 194, 201);
border-radius: 2px;
`
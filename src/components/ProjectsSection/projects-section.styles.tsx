import styled from 'styled-components';
import {motion} from 'framer-motion';

export const ProjectsSectionContainer = styled(motion.div)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 90%;
min-height: 100vh;
max-width: 1000px;
margin-top: 20px;
@media (max-width:768px) {
    width:100%;
}
`

export const ProjectsSectionHeader = styled.div`
font-size: 70px;
text-transform: uppercase;
font-family: Teko, sans-serif;
line-height:70px;
@media(max-width: 500px) {
    font-size: 50px;
    line-height: 50px;
}
`

export const Divider = styled.hr`
width: 80px;
align-self: flex-start;
height: 4px;
background-color:  #04c2c9;
border: none;
margin: 0;
`
import styled from 'styled-components';
import {motion} from 'framer-motion';


export const AppContainer = styled(motion.div)`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
min-height: 100%;
background-color: black;
width:100vw;
overflow-x: hidden;
`

export const AnimationContainer = styled(motion.div)`
width: 0%0%;
height: 100%;
background-color: rgb(4, 229, 229);
position: fixed;
top: 0;
left: 0;
z-index: 1500;
`

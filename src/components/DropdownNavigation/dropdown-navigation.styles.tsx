import styled from 'styled-components';
import {motion} from 'framer-motion';

export const DropdownContainer = styled(motion.div)`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
left: 0;
z-index: 2;
background-color: #000000;
text-transform: uppercase;
`


export const DropdownOption = styled(motion.div)`
color: white;
font-size: 2.5rem;
margin-bottom: 10px;
&:hover {
    color: #04c2c9;
    cursor: pointer;
}

`

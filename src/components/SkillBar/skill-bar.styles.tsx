import styled from 'styled-components';
import {motion} from 'framer-motion';


export const SkillBarContainer = styled(motion.div)`
height: 35px;
width: 100%;
display: flex;
flex-direction: row;
margin-bottom: 15px;
`

export const SkillBarTitle = styled.div`
display: flex;
flex: 1 1 35%;
justify-content: flex-start;
align-items: center;
height: 100%;
background-color: #04c2c9;
color: white;
border-radius: 5px 0px 0px 5px;
padding-left: 10px;
`

export const SkillBarOuter = styled.div`
position: relative;
height: 100%;
display: flex;
flex: 1 1 65%;
color: white;
`

export const SkillBarInner = styled(motion.div)`
height: 100%;
background-color: #04c2c9;
align-self: flex-start;
border-radius: 0px 5px 5px 0px;
`

export const SkillBarPercentage = styled.span`
position: absolute;
align-self: center;
right: 0;
margin-left:5px;
`



import styled from 'styled-components';
import {motion} from 'framer-motion';

export const AboutSectionContainer = styled(motion.div)`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
min-height: 100vh;
width: 90vw;
max-width: 1000px;
color: white;
margin-top:60px;
@media (max-width: 988px) {
    flex-direction: column;
}
`

export const PersonalInfoSection = styled(motion.div)`
display: flex;
flex: 1 1 50%;
flex-direction: column;
justify-content: flex-start;
align-items: center;
max-width: 50ch;
`

export const PersonalInfoHeader = styled.div`
font-size: 70px;
text-transform: uppercase;
font-family: Teko;
line-height: 70px;
`

export const PhotoContainer = styled(motion.div)`
width: 300px;
height: 300px;
background-size: cover;
background-position: center;
border-radius: 50%;
box-shadow: 5px 30px 60px rgba(4, 229, 229, 0.2),
-5px 30px 60px rgba(4, 229, 229, 0.2),
5px -10px 60px rgba(4, 229, 229, 0.2),
-5px -10px 60px rgba(4, 229, 229, 0.2);
@media (max-width: 768px) {
    width: 200px;
    height: 200px;
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

export const AboutText = styled(motion.p)`
width: 90%;
font-style: italic;
margin: 30px 0;
`

export const SkillsSection = styled(motion.div)`
display: flex;
flex: 1 1 50%;
flex-direction: column;
@media (max-width: 988px) {
    flex: 1 1 100%;
    width:100%;
    max-width: 500px;
    font-size: 0.8rem;
    margin: 50px 0;
}
`

export const SkillsSectionHeader = styled.h3`
align-self: flex-end;
text-align: right;
`
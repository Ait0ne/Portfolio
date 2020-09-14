import styled from 'styled-components';
import {motion} from 'framer-motion';

export const LandingSectionContainer = styled(motion.section)`
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
width: 100%;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`

export const LandingSectionContent = styled(motion.div)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 90%;
max-width: 620px;
`
export const LandingSectionText = styled(motion.div)`
display: flex;
width: 100%;
flex-direction: column;
min-height: 100px;
text-align: center;
font-size: 2.2rem;
@media (max-width: 768px) {
    font-size: 1.5rem;
}
`

export const NameText = styled(motion.div)`
color: white;
position: relative;
> span > span {
    color: #04c2c9;
}
`
export const JobTitle = styled(motion.div)`
color: white;
position: relative;
`
export const Block = styled(motion.span)`
background-color: #04c2c9;
position: absolute;
height: 100%;
z-index:1;
`

export const PortfolioButton = styled(motion.button)`
cursor: pointer;
width: 160px;
height: 60px;
color: white;
position: relative;
overflow: hidden;
border: none;
margin-top: 20px;
font-size: 1rem;
>span {
    position: relative;
    top: 0;
    text-transform: uppercase;
    z-index: 1;
    font-weight: 600;
    > svg {
        margin-left: 10px;
        transition: all 0.5s ease 0s
    }
}
&:after {
    content: '';
    width: 140%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(45deg, rgb(41, 153, 153) 0%, rgb(50, 189, 189) 25%, rgb(4, 229, 229) 51%, rgb(41, 153, 153) 100%);
    transition: all 0.5s ease 0s
}
&:hover {
    &:after {
        transform: translateX(-20%)
    }
    >span {
        >svg {
            transform: rotateZ(90deg)
        }
    }
}
`
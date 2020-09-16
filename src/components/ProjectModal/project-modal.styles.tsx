import styled from 'styled-components';
import {motion} from 'framer-motion';

export const ModalFullScreenContainer = styled.div`
width:100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: transparent;
position: fixed;
z-index: 2200;
top:0;
left: 0;
`

export const Backdrop = styled.div`
width:100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0,0,0,0.5);
position: fixed;
top:0;
left: 0;
`

export const ModalContainer = styled(motion.div)`
position: relative;
z-index:1;
width: 100%;
height: 90%;
max-width: 768px;
background-color: transparent;
@media (max-width: 768px) {
    height: 100%;
}
`
export const ModalContainerInner = styled(motion.div)`
width:100%;
height:100%;
background-color: white;
>svg {
    position: absolute;
    right: 20px;
    top: 15px;
    color: rgba(4,194,201,0.5);
    font-size: 25px;
    z-index: 1000;
    cursor: pointer;
}
`




interface SliderImageProps {
    image: string
}

export const SliderImage = styled(motion.div)<SliderImageProps>`
background-position: center;
background-size: cover;
background-image: url(${props=> props.image});
background-repeat: no-repeat;
width: 100%;
max-width:768px;
height: 0;
padding-bottom: 73%;
`

export const GalleryContainer = styled.div`

`

export const DescriptionContainer = styled.div`
padding: 20px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;
`

export const ProjectTitle = styled.h1`
margin: 5px 0;
`

export const ProjectDescription = styled.p`
max-width: 50ch;
margin: 5px 0;
>a {
    color:rgb(4,194,201)
}
@media (max-width: 768px) {
    font-size: 0.8rem;
}
`

export const ProjectButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
margin-top: 5px;
`

export const CustomButton = styled.a`
width: 160px;
height: 60px;
margin: 0 10px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
text-decoration: none;
/* border: 3px solid rgb(4,194,201); */
background: linear-gradient(45deg, rgb(41, 153, 153) 0%, rgb(50, 189, 189) 25%, rgb(4, 229, 229) 51%, rgb(41, 153, 153) 100%);
padding: 5px 15px;
color: white;
background-size: 160%;
background-position-x: 0%;
transition-duration: 0.5s;
&:hover {
    background-position-x: 50%
}
@media (max-width: 768px) {
    width: 120px;
    height: 50px;
    font-size: 0.8rem;
}
`


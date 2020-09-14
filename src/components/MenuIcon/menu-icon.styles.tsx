import styled from 'styled-components';

interface IconProps {
    open: Boolean
}

export const MenuIconContainer = styled.div<IconProps>`
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
z-index: 1000;
cursor: pointer;
&:first-child {
    transform: ${props => props.open? 'rotateZ(45deg)' : 0};
    transform-origin: 0% 0%
}
> span {
width: 36px;
height: 5px;
border-radius: 2px;
background-color: #04c2c9;
margin-bottom: 5px;
transition: all 0.5s ease-in-out;
&:nth-of-type(1) {
    transform: ${props => props.open? 'rotateZ(45deg) ' : 0};
    transform-origin: 0% 50%;
};
&:nth-of-type(3) {
    transform: ${props => props.open? ' translateY(5px) rotateZ(-45deg) ' : 0};
    transform-origin: 0% 50%;
};
&:nth-of-type(2) {
    opacity: ${props => props.open? 0 : 1};

}
}

`
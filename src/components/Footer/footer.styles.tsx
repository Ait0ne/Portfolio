import styled from 'styled-components';

export const FooterContainer = styled.div`
width: 100%;
height: 200px;
background-color: #080808;
display: flex;
justify-content: center;
align-items: center;
z-index:1;
color: white;
cursor: default;
`

export const FooterContainerInner = styled.div`
width:100%;
max-width:900px;
display: flex;
height: 100%;
justify-content: center;
align-items: center;
flex-direction: column;
position: relative;
`

export const Contacts = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
> p {
    margin: 5px;
    text-align:center;
    >span {
        color: rgb(4,194,201);
    }
}

`

export const Info = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
font-family: 'Raleway', sans-serif;
font-size: 0.8rem;
>a>svg {
    color: white;
    margin-right: 10px;
}
>span>span {
    color: rgb(4,194,201);
}
`
export const GoToTopButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
bottom: 180px;
width:40px;
height: 40px;
background: linear-gradient(45deg, rgb(41, 153, 153) 0%, rgb(50, 189, 189) 25%, rgb(4, 229, 229) 51%, rgb(41, 153, 153) 100%);
color: white;
font-size: 25px;
background-size: 160%;
background-position-x: 0%;
transition-duration: 0.5s;
cursor: pointer;
>svg{
    transition-duration: 0.3s;
}
&:hover {
    background-position-x: 50%;
    color: rgba(255,255,255,0.7);
    >svg {
        transform: scale(1.1)
    }
}
`

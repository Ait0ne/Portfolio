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


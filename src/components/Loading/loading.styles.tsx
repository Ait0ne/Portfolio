import styled from 'styled-components';

export const LoadingContainer = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
display: flex;
justify-content: center;
align-items: center;
top: 0;
left: 0;
background-color: rgb(0, 0, 0);
color: white;
z-index:100;
font-size: 2rem;
>div >span {
    margin: 0 8px
}
@media (max-width: 600px) {
    font-size: 1.6rem;
}
`
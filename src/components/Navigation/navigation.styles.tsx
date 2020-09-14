import styled from 'styled-components';

export const NavigationContainer = styled.div`
display: flex; 
justify-content: center;
position: fixed;
background-color: rgb(0,0,0);
width: 100vw;
height: 60px;
z-index:10;
`

export  const NavigationContainerInner = styled.div`
display: flex;
width: 90%;
max-width: 1000px;
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 100%;
text-transform: uppercase;
`

export const TitleContainer = styled.div`
cursor: pointer;
color: white;
font-family: 'Teko', sans-serif;
font-size: 2rem;
`

export  const NavigationOptions = styled.div`
display: flex;
width: 70%;
flex-direction: row;
justify-content: flex-end;
align-items: center;
height: 100%;
`

export const NavigationOption = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
color: white;
margin-left: 30px;
&:hover {
    color: #04c2c9;
    cursor: pointer;
}
`



import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    @media screen and (max-width: 1024px){
        ont-size: 93.75%;
    }
    @media screen and (max-width: 720px){
        font-size: 87.5%;
    }
  }
  body{
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;

    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.black};
    
    transition: all 0.4s ease-in-out;
  }
`

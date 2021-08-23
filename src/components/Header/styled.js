import styled from 'styled-components'

export const ContainerHeader = styled.header`
  width: 100%;
  max-height: 70px;
  h1 {
    font-style: normal;
    font-weight: 900;
    font-size: 2rem;
    line-height: 3rem;
    letter-spacing: -0.02em;

    color: ${({ theme }) => theme.colors.black};
  }
`

import styled from 'styled-components'

export const Info = styled.div`
  max-width: 600px;
  margin: 3rem auto;

  @media (max-width: 576px) {
    padding: 0 1rem;
  }

  h1 {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    display: block;
    margin-top: 20px;
    font-weight: 700;
    color: cornflowerblue;
  }

  img {
    display: block;
    width: 100%;
  }
`

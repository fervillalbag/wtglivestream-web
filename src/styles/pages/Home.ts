import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 30rem;
  background-color: ${props => props.theme.colors.background};
  margin: 2rem;
  border-radius: 3rem;
  height: calc(100vh - 4rem);
  overflow: hidden;

  @media (max-width: 1375px) {
    grid-template-columns: 1fr 28rem;
  }

  @media (max-width: 1070px) {
    grid-template-columns: 1fr 0;
  }

  @media (max-width: 575px) {
    height: calc(100vh - 3rem);
    margin: 1.5rem 1rem;
  }
`

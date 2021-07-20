import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;

  @media (max-width: 1070px) {
    padding: 0 2rem;
  }

  .brand {
    padding: 1rem 1.5rem;

    @media (max-width: 1070px) {
      padding: 1rem;
    }

    @media (max-width: 660px) {
      display: none;
    }
  }

  .info {
    display: flex;
    align-items: center;
  }

  .action {
    display: flex;
    align-items: center;
  }

  .title {
    color: ${props => props.theme.colors.primary};
    @media (max-width: 1540px) {
      font-size: 1.4rem;
    }

    @media (max-width: 1145px) {
      font-size: 1.2rem;
    }

    @media (max-width: 1070px) {
      font-size: 1rem;
    }

    @media (max-width: 575px) {
      display: none;
    }
  }

  .subtitle {
    @media (max-width: 1145px) {
      display: none;
    }
  }

  .button {
    border: none;
    padding: 1rem;
    border-radius: 0.5rem;
    height: 45px;
    cursor: pointer;
    margin-right: 1rem;
    background-color: ${props => props.theme.colors.light};
    display: flex;
    align-items: center;
    font-weight: 700;
    -webkit-box-shadow: 6px 6px 5px -1px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 6px 6px 5px -1px rgba(0, 0, 0, 0.1);
    box-shadow: 6px 6px 5px -1px rgba(0, 0, 0, 0.1);

    &.dark {
      background-color: ${props => props.theme.colors.dark};
      color: ${props => props.theme.colors.light};

      @media (max-width: 1275px) {
        min-width: 120px;
      }
    }

    &:nth-child(3) {
      @media (max-width: 575px) {
        display: none;
      }
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
`

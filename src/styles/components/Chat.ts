import styled from 'styled-components'

export const Chat = styled.div`
  margin: 1.5rem 2rem;
  background-color: ${props => props.theme.colors.light};
  height: calc(100vh - 84px - 2rem);
  border-radius: 2rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title {
    color: ${props => props.theme.colors.dark};
    font-size: 24px;
    font-weight: 700;
  }

  .chat {
    margin-top: 1rem;
  }

  .message {
    display: flex;
    align-items: flex-end;
    cursor: pointer;
    margin-bottom: 1rem;

    &.to {
      justify-content: flex-end;
    }

    &-info {
      margin-left: 0.5rem;
    }

    &-name {
      display: block;
      font-size: 0.9rem;
      color: ${props => props.theme.colors.gray};
    }

    &-main {
      display: block;
      background-color: ${props => props.theme.colors.background};
      padding: 0.4rem 0.6rem;
      border-radius: 0.7rem;
      font-size: 0.9rem;
      margin-top: 0.1rem;
    }

    &-avatar {
      border-radius: 100%;
      vertical-align: top;
    }
  }

  .form {
    border-top: 1px solid hsl(0deg, 0%, 86%);
    margin: -1.5rem;
    padding: 0.7rem 1.5rem;
  }

  .button {
    border: none;
    background-color: transparent;
    margin-right: 0.5rem;

    &:last-of-type {
      margin-right: 0;
    }
  }

  .input {
    margin: -0.5rem;
    margin-top: 0.5rem;

    textarea {
      height: 90px;
      padding: 0.5rem;
      border: none;
      width: 100%;
      outline: none;
      resize: none;
      font-family: 'Roboto', sans-serif;
    }
  }
`

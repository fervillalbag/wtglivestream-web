import styled from 'styled-components'

export const Video = styled.div`
  position: relative;

  .image {
    width: 100%;
    height: 800px;
    object-fit: cover;
    vertical-align: top;

    @media (max-width: 575px) {
      height: calc(100vh - 90px);
    }
  }

  .tag {
    position: absolute;
    background-color: ${props => props.theme.colors.light};
    top: 2rem;
    left: 1.5rem;
    padding: 0.5rem 0.7rem;
    border-radius: 0.4rem;
    display: flex;
    align-items: center;

    > span {
      margin-right: 0.4rem;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }

  .dot {
    width: 0.5rem;
    height: 0.5rem;
    background-color: red;
    display: block;
    border-radius: 100%;
  }

  .live {
    display: block;
    text-transform: uppercase;
    font-weight: 700;
    color: ${props => props.theme.colors.dark};
    font-size: 0.9rem;
  }

  .time {
    display: block;
    font-size: 0.9rem;
    color: ${props => props.theme.colors.gray};
    font-weight: 400;
  }

  .footer {
    position: absolute;
    bottom: -1rem;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.background};
    width: 100%;
    padding: 1rem;
    height: 110px;
    display: flex;

    @media (max-width: 575px) {
      bottom: 3rem;
      justify-content: flex-start;
    }
  }

  .item {
    margin-right: 0.8rem;

    &:last-of-type {
      margin-right: 0;
    }

    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(7) {
      @media (max-width: 575px) {
        display: none;
      }
    }
  }

  .button {
    background-color: ${props => props.theme.colors.light};
    border: none;
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 100%;
    cursor: pointer;
    -webkit-box-shadow: 6px 6px 5px -1px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 6px 6px 5px -1px rgba(0, 0, 0, 0.1);
    box-shadow: 6px 6px 5px -1px rgba(0, 0, 0, 0.1);

    @media (max-width: 575px) {
      width: 3rem;
      height: 3rem;
    }
  }

  .text {
    display: block;
    font-size: 0.8rem;
    text-align: center;
    color: hsl(0deg, 0%, 60%);
    margin-top: 0.4rem;
  }
`

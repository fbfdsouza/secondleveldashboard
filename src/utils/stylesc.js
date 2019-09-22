import styled, { keyframes } from "styled-components";

export const slideInLeft = keyframes`
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;
export const slideOutLeft = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
`;

export const PageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #e3f2fd;
  font-family: "Open Sans", sans-serif;
`;

export const Page = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  h2 {
    color: #0d47a1;
  }
  p {
    font-size: 1rem;
    max-width: 400px;
    margin: 20px auto;
    color: #37474f;
  }
  a {
    text-decoration: none;
    color: #fff;
    padding: 10px 20px;
    border: 1px solid #4776e6;
    border-radius: 5px;
    background-image: linear-gradient(
      to right,
      #4776e6 0%,
      #8e54e9 51%,
      #4776e6 100%
    );
  }

  img {
    border-radius: 50%;
  }
`;

export const Slide = styled(Page)`
  &.page-enter {
    animation: ${slideInLeft} 4s forwards;
  }
  &.page-exit {
    animation: ${slideOutLeft} 4s forwards;
  }
`;

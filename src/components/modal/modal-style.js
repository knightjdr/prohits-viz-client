import styled from 'styled-components';

const Div = styled.div`
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ${props => props.theme.timingFunction};
  background-color: rgba(0, 0, 0, 0.3);
  font-family: ${props => props.theme.fontStackPrimary};
  font-weight: 400;
  height: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  text-transform: none;
  top: 0;
  width: 100vw;

  & > section {
    background-color: white;
    border-radius: 2px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
    box-sizing: border-box;
    color: black;
    max-height: calc(100vh - 80px);
    max-width: calc(100vw - 80px);
    opacity: inherit;
    pointer-events: inherit;
    position: fixed;
    top: 100px;
    z-index: 100;
  }

  & section > * {
    padding: 5px 10px;
  }

  & header {
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 10px;
    padding-top: 5px;
  }
  & h1 {
    font-size: 1.5em;
    font-weight: 400;
    margin: 0;
  }

  & footer {
    border-top: 1px solid #e0e0e0;
  }

  &.open {
    animation-name: modalappear;
    pointer-events: auto;
  }
  &.close {
    animation-name: modalclose;
  }

  &.modal_x-center > section {
    left: 50%;
    transform: translateX(-50%);
  }
  &.modal_y-top > section {
    top: 40px;
  }

  @keyframes modalappear {
    0% {
      height: 0;
      opacity: 0;
    }
    1% {
      height: 100vh;
      opacity: 0.01;
    }
    100% {
      height: 100vh;
      opacity: 1;
    }
  }

  @keyframes modalclose {
    0% {
      height: 100vh;
      opacity: 1;
    }
    99% {
      height: 100vh;
      opacity: 0.01;
    }
    100% {
      height: 0;
      opacity: 0;
    }
  }
`;

export default Div;

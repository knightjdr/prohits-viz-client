import styled from 'styled-components';

const Div = styled.div`
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ${props => props.theme.timingFunction};
  background-color: ${props => (props.background ? 'rgba(0, 0, 0, 0.3)' : 'transparent')};
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
  z-index: 2147483647;

  & > section {
    background-color: white;
    border-radius: 2px;
    box-shadow: ${props => (props.shadow ? 'rgba(0, 0, 0, 0.25) 0px 5px 10px, rgba(0, 0, 0, 0.22) 0px 5px 10px' : 'none')};
    box-sizing: border-box;
    color: ${props => props.theme.fontDark};
    max-height: calc(100vh - 90px);
    max-width: calc(100vw - 90px);
    opacity: inherit;
    padding: 5px;
    pointer-events: inherit;
    position: fixed;
  }

  & > section > * {
    padding: 5px 10px;
  }

  &.modal_from-cursor > section {
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-timing-function: ${props => props.theme.timingFunction};
    position: absolute;
    transform: scale(0);
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

  &.modal_from-viewport.open {
    animation-name: modalfadein;
    pointer-events: auto;
  }
  &.modal_from-viewport.close {
    animation-name: modalfadeout;
  }

  &.modal_from-cursor.open {
    animation-name: modalappear;
    pointer-events: auto;
  }
  &.modal_from-cursor.close {
    animation-name: modaldisappear;
  }
  &.modal_from-cursor.open > section {
    animation-name: sectionscalein;
  }
  &.modal_from-cursor.close > section {
    animation-name: sectionscaleout;
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
      opacity: 1;
    }
    100% {
      height: 100vh;
      opacity: 1;
    }
  }
  @keyframes modaldisappear {
    0% {
      height: 100vh;
      opacity: 1;
    }
    99% {
      height: 100vh;
      opacity: 1;
    }
    100% {
      height: 0;
      opacity: 0;
    }
  }

  @keyframes modalfadein {
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
  @keyframes modalfadeout {
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

  @keyframes sectionscalein {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes sectionscaleout {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0);
    }
  }
`;

export default Div;

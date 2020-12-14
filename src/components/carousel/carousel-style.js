import styled from 'styled-components';

const Div = styled.div`
  position: relative;

  .carousel__buttons {
    align-items: center;
    bottom: 10px;
    display: flex;
    left: 50%;
    position: absolute;
    transform: translate(-50%, 0);
  }
  .carousel__buttons > :first-child {
    margin-right: 5px;
  }
  .carousel__buttons > :last-child {
    margin-left: 5px;
  }
  .carousel__grid-button {
    background-color: ${(props) => props.theme.colorPrimary2};
    border: none;
    cursor: pointer;
    height: 10px;
    margin: 0 3px;
    padding: 0;
    transition-duration: 0.3s;
    transition-property: background-color;
    transition-timing-function: ${(props) => props.theme.timingFunction};
    width: 20px;
  }
  .carousel__grid-button.active {
    background-color: ${(props) => props.theme.accentPrimary1};
  }
  .carousel__grid-button:focus,
  .carousel__grid-button:hover {
    background-color: ${(props) => props.theme.colorPrimary1};
    outline: none;
  }
  .carousel__grid-button::-moz-focus-inner {
    border: 0;
  }
  .carousel__slider {
    position: relative;
  }
  .carousel__slider-active {
    animation-duration: ${(props) => `${props.animationDuration}ms`};
  }
  @keyframes slideActiveLeft {
    from {
      opacity: 0;
      transform: translate(100%, 0);
    }
    to {
      opacity: 1;
      transform: translate(0%, 0);
    }
  }
  @keyframes slideActiveRight {
    from {
      opacity: 0;
      transform: translate(-100%, 0);
    }
    to {
      opacity: 1;
      transform: translate(0%, 0);
    }
  }
`;

export default Div;

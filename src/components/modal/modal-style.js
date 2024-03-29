/* eslint-disable max-len */

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ${(props) => props.theme.timingFunction};
  background-color: ${(props) => (props.background ? 'rgba(0, 0, 0, 0.3)' : 'transparent')};
  font-family: ${(props) => props.theme.fontStackPrimary};
  font-weight: 400;
  height: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  text-transform: none;
  top: 0;
  width: 100%;
  z-index: 2147483647;

  & > section {
    background-color: white;
    border-radius: 3px;
    box-shadow: ${(props) => (props.shadow ? 'rgba(0, 0, 0, 0.25) 0px 5px 10px, rgba(0, 0, 0, 0.22) 0px 5px 10px' : 'none')};
    box-sizing: border-box;
    color: ${(props) => props.theme.fontDark};
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - 90px);
    max-width: calc(100vw - 90px);
    opacity: inherit;
    padding: ${(props) => (props.padding ? '5px' : '0')};
    pointer-events: inherit;
    position: absolute;
  }

  & > section > * {
    padding: ${(props) => (props.padding ? '10px' : '0')};
  }

  .modal__header {
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 10px;
    padding-top: 5px;
  }
  .modal__header h1 {
    font-family: ${(props) => props.theme.fontStackSecondary};
    font-size: 1.3em;
    font-weight: 800;
    margin: 0;
  }

  .modal__content {
    overflow: auto;
  }

  .modal__footer {
    border-top: 1px solid #e0e0e0;
  }

  &.open {
    animation-name: modalfadein;
    pointer-events: auto;
  }
  &.closed {
    animation-name: modalfadeout;
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
`;

Div.defaultProps = {
  background: true,
  padding: true,
  shadow: true,
};

Div.propTypes = {
  background: PropTypes.bool,
  padding: PropTypes.bool,
  shadow: PropTypes.bool,
};

export default Div;

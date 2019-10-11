import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  box-sizing: border-box;
  font-family: ${props => props.theme.fontStackSystem};
  transform-origin: center;
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: ${props => props.theme.timingFunction};

  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }

  ${props => (props.disabled
    && css`& {
      cursor: not-allowed;
      opacity: 0.6;
    }`
  )};

  ${props => (props.shadow
    && css`& {
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    }`
  )};

  &:active {
    animation-duration: 0.3s;
    animation-name: click;
    animation-timing-function: ${props => props.theme.timingFunction}
  }

  @keyframes click {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(0.85);
    }

    100% {
      transform: scale(1);
    }
  }
`;

Button.defaultProps = {
  disabled: false,
  kind: 'primary',
  shadow: false,
};

Button.propTypes = {
  disabled: PropTypes.bool,
  kind: PropTypes.string,
  shadow: PropTypes.bool,
};

export default Button;

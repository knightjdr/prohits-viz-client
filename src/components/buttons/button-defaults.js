import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border-color: transparent;
  box-sizing: border-box;
  font-family: ${(props) => props.theme.fontStackSystem};
  transform-origin: center;
  transition-duration: 0.3s;
  transition-property: background-color, border-color, color;
  transition-timing-function: ${(props) => props.theme.timingFunction};

  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }

  ${(props) => (props.disabled
    && css`& {
      cursor: not-allowed;
      opacity: 0.6;
    }`
  )};

  ${(props) => (props.shadow
    && css`& {
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    }`
  )};

  ${(props) => (props.kind === 'alert'
    && css`& {
      background-color: ${props.theme.alert2};
      color: #421C1A;
    }
    &:focus:not([disabled]),
    &:hover:not([disabled]) {
      background-color: #fff;
      border-color: ${props.theme.alert2};
    }`
  )};

  ${(props) => (props.kind === 'grey'
    && css`& {
      background-color: rgba(0, 0, 0, 0.2);
      color: ${props.theme.fontDark};
    }
    &:focus:not([disabled]),
    &:hover:not([disabled]) {
      background-color: #fff;
      border-color: rgba(0, 0, 0, 0.2);
    }`
  )};
  
  ${(props) => (props.kind === 'primary'
    && css`& {
      background-color: ${props.theme.colorPrimary1};
      color: ${props.theme.fontLight};
    }
    &:focus:not([disabled]),
    &:hover:not([disabled]) {
      background-color: #fff;
      border-color: ${props.theme.colorPrimary1};
      color: ${props.theme.colorPrimary1};
    }`
  )};

  ${(props) => (props.kind === 'secondary'
    && css`&{
      background-color: ${props.theme.colorSecondary1};
      color: ${props.theme.fontLight};
    }

    &:focus:not([disabled]),
    &:hover:not([disabled]) {
      background-color: #fff;
      border-color: ${props.theme.colorSecondary1};
      color: ${props.theme.colorSecondary1};
    }`
  )}

  ${(props) => (props.kind === 'success'
    && css`& {
      background-color: ${props.theme.success};
      color: ${props.theme.fontLight};
    }
    &:focus:not([disabled]),
    &:hover:not([disabled]) {
      background-color: #fff;
      border-color: ${props.theme.success};
      color: ${props.theme.success};
    }`
  )};

  ${(props) => (props.kind === 'warning'
    && css`&{
      background-color: ${props.theme.warning};
      color: ${props.theme.fontLight};
    }

    &:focus:not([disabled]),
    &:hover:not([disabled]) {
      background-color: #fff;
      border-color: ${props.theme.warning};
      color: ${props.theme.warning};
    }`
  )}

  &:active {
    animation-duration: 0.3s;
    animation-name: click;
    animation-timing-function: ${(props) => props.theme.timingFunction}
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

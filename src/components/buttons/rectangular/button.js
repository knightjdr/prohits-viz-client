import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border-radius: 3px;
  border-style: solid;
  border-width: 2px;
  box-sizing: border-box;
  font-family: ${props => props.theme.fontStackSystem};
  font-size: inherit;
  padding: 0.2em 0.5em;
  transform-origin: center;
  transition-duration: 0.4s;
  transition-property: all;
  transition-timing-function: ${props => props.theme.timingFunction};

  ${props => (props.shadow
    && css`& {
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    }`
  )};

  ${props => (props.kind === 'grey'
    && css`& {
      background-color: rgba(0, 0, 0, 0.2);
      border-color: transparent;
      color: ${props.theme.fontDark};
    }
    &:focus,
    &:hover {
      background-color: #fff;
      border-color: rgba(0, 0, 0, 0.2);
    }`
  )};

  ${props => (props.kind === 'primary'
    && css`& {
      background-color: ${props.theme.colorPrimary1};
      border-color: transparent;
      color: ${props.theme.fontLight};
    }
    &:focus,
    &:hover {
      background-color: #fff;
      border-color: ${props.theme.colorPrimary1};
      color: ${props.theme.fontDark};
    }`
  )};

  ${props => (props.kind === 'secondary'
    && css`& {
      background-color: ${props.theme.colorSecondary1};
      border-color: transparent;
      color: ${props.theme.fontLight};
    }
    &:focus,
    &:hover {
      background-color: #fff;
      border-color: ${props.theme.colorSecondary1};
      color: ${props.theme.fontDark};
    }`
  )};

  ${props => (props.kind === 'success'
    && css`& {
      background-color: ${props.theme.success};
      border-color: transparent;
      color: #421C1A;
    }
    &:focus,
    &:hover {
      background-color: #fff;
      border-color: ${props.theme.success};
    }`
  )};

  ${props => (props.kind === 'warning'
    && css`& {
      background-color: ${props.theme.warning1};
      border-color: transparent;
      color: #420802;
    }
    &:focus,
    &:hover {
      background-color: #fff;
      border-color: ${props.theme.warning1};
    }`
  )};

  &:active {
    transform: scale(0.9);
  }

  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
`;

Button.defaultProps = {
  kind: 'primary',
};

Button.propTypes = {
  kind: PropTypes.string,
};

export default Button;

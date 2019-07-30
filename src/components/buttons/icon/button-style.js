import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Button = styled.button`
  align-items: center;
  border: none;
  box-sizing: content-box;
  color: ${props => props.theme.colorPrimary1};
  cursor: pointer;
  display: flex;
  font-size: 1.5em;
  justify-content: center;
  min-height: 30px;
  min-width: 30px;
  padding: 2px;
  position: relative;
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: ${props => props.theme.timingFunction};
  z-index: 2;

  &::before {
    border-radius: 50%;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: inherit;
    transform: scale(0);
    transform-origin: center center;
    width: 100%;
    z-index: -1;
  }

  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }

  ${props => (props.fill === 'primary'
    && css`&{
      background-color: ${props.theme.colorPrimary1};
      border-radius: 50%;
      color: ${props.theme.fontLight};
    }

    &:focus,
    &:hover {
      background-color: ${props.theme.accentPrimary1};
      color: ${props.theme.colorPrimary1};
    }`
  )}

  ${props => (props.fill === 'transparent'
    && css`& {
      background-color: transparent;
    }

    &::before {
      background-color: ${props.theme.colorPrimary1};
      opacity: 0;
    }

    &:focus,
    &:hover {
      color: ${props.theme.fontLight};
    }
    &:focus::before,
    &:hover::before {
      opacity: 1;
      transform: scale(1);
    }`
  )}
`;

Button.defaultProps = {
  fill: 'transparent',
};

Button.propTypes = {
  fill: PropTypes.string,
};

export default Button;

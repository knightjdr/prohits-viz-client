import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Button = styled.button`
  align-items: center;
  border: none;
  border-radius: 50%;
  box-sizing: border-box;
  color: ${props => props.theme.colorPrimary1};
  display: flex;
  font-size: 1.3em;
  justify-content: center;
  min-height: 34px;
  min-width: 34px;
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

  ${props => (props.shadow
    && css`& {
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    }`
  )};

  ${props => (props.kind === 'primary'
    && css`&{
      background-color: ${props.theme.colorPrimary1};
      border-radius: 50%;
      color: ${props.theme.fontLight};
    }

    &:focus,
    &:hover {
      background-color: ${props.theme.colorPrimary2};
      color: ${props.theme.colorPrimary1};
    }`
  )}

  ${props => (props.kind === 'secondary'
    && css`&{
      background-color: ${props.theme.colorSecondary1};
      border-radius: 50%;
      color: ${props.theme.fontLight};
    }

    &:focus,
    &:hover {
      background-color: ${props.theme.colorPrimary1};
    }`
  )}

  ${props => (props.kind === 'transparent'
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

  ${props => (props.kind === 'warning'
    && css`&{
      background-color: ${props.theme.warning1};
      border-radius: 50%;
      color: ${props.theme.fontLight};
    }

    &:focus,
    &:hover {
      background-color: ${props.theme.warning2};
      color: ${props.theme.fontDark};
    }`
  )}
`;

Button.defaultProps = {
  kind: 'transparent',
};

Button.propTypes = {
  kind: PropTypes.string,
};

export default Button;

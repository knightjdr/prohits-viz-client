import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import DefaultButton from '../button-defaults';

const Button = styled(DefaultButton)`
  align-items: center;
  border-color: transparent;
  border-radius: 50%;
  border-style: solid;
  border-width: 2px;
  color: ${props => props.theme.colorPrimary1};
  display: flex;
  font-size: 1.3em;
  justify-content: center;
  height: 34px;
  padding: 2px;
  position: relative;
  width: 34px;

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

  ${props => (props.kind === 'transparent'
    && css`& {
      background-color: transparent;
      border: none;
      border-radius: 50%;
    }

    &::before {
      background-color: ${props.theme.colorPrimary1};
      opacity: 0;
    }

    &:focus:not([disabled]),
    &:hover:not([disabled]) {
      box-shadow: none;
      color: ${props.theme.fontLight};
    }
    &:focus:not([disabled])::before,
    &:hover:not([disabled])::before {
      opacity: 1;
      transform: scale(1);
    }`
  )}
`;

Button.defaultProps = {
  disabled: false,
  kind: 'transparent',
};

Button.propTypes = {
  disabled: PropTypes.bool,
  kind: PropTypes.string,
};

export default Button;

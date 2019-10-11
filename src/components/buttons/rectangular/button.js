import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import DefaultButton from '../button-defaults';

const Button = styled(DefaultButton)`
  border-radius: 3px;
  border-style: solid;
  border-width: 2px;
  font-size: inherit;
  padding: 0.2em 0.5em;

  ${props => (props.kind === 'grey'
    && css`& {
      background-color: rgba(0, 0, 0, 0.2);
      border-color: transparent;
      color: ${props.theme.fontDark};
    }
    &:focus:not([disabled]),
    &:hover:not([disabled]) {
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
    &:focus:not([disabled]),
    &:hover:not([disabled]) {
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
    &:focus:not([disabled]),
    &:hover:not([disabled]) {
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
    &:focus:not([disabled]),
    &:hover:not([disabled]) {
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
    &:focus:not([disabled]),
    &:hover:not([disabled]) {
      background-color: #fff;
      border-color: ${props.theme.warning1};
    }`
  )};
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

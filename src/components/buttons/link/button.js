import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background: none;
  border: none;
  color: #2468e5;
  font: inherit;
  padding: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }

  &:hover,
  &:active {
    text-decoration: underline;
  }

  ${props => (!props.outline
    && css`&:focus {
      text-decoration: underline;
    }`
  )}

  ${props => (props.outline
    && css`&:focus {
      outline: auto;
      outline-color: #4D90FE;
      outline-offset: 2px;
      outline-style: dashed;
      outline-width: 2px;
    }`
  )}
`;

Button.defaultProps = {
  outline: false,
};

Button.propTypes = {
  outline: PropTypes.bool,
};

export default Button;

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const A = styled.a`
  text-decoration: none;
  white-space: nowrap;

  &:link {
    color: #2468e5;
  }

  &:visited {
    color: ${props => (props.visited ? '#1E6C60' : '#2468e5')};
  }

  &:hover,
  &:active {
    color: #23527c;
    text-decoration: underline;
  }

  ${props => (!props.outline
    && css`&:focus {
      color: #23527c;
      outline: none;
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

A.defaultProps = {
  outline: true,
  visited: true,
};

A.propTypes = {
  outline: PropTypes.bool,
  visited: PropTypes.bool,
};

export default A;

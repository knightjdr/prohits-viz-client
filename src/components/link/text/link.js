import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { A } from 'hookrouter';

const Link = styled(({ outline, visited, ...props }) => <A {...props} />)`
  text-decoration: none;
  white-space: nowrap;

  &:link {
    color: #2468e5;
  }

  &:visited {
    color: ${props => (props.visited ? '#673ab7' : '#2468e5')};
  }

  &:hover,
  &:active {
    text-decoration: underline;
  }

  ${props => (!props.outline
    && css`&:focus {
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

Link.defaultProps = {
  outline: false,
  visited: true,
};

Link.propTypes = {
  outline: PropTypes.bool,
  visited: PropTypes.bool,
};

export default Link;

import styled from 'styled-components';

import Button from '../../buttons/rectangular/button';

const Span = styled.span`
  box-sizing: border-box;
  display: inline-block;
  position: relative;

  input {
    opacity: 0;
    overflow: hidden;
    position: absolute;
    height: 0.1px;
    width: 0.1px;
    z-index: -1;
  }
  input:focus + label {
    background-color: #fff;
    border-color: ${(props) => props.theme.colorPrimary1};
    color: ${(props) => props.theme.fontDark};
  }
  li {
    align-items: center;
    border-radius: 3px;
    box-sizing: border-box;
    display: flex;
    max-width: 250px;
    padding: 3px 8px;
    transition-duration: 0.4s;
    transition-property: all;
    transition-timing-function: ${(props) => props.theme.timingFunction};
  }
  li > button {
    background-color: transparent;
    border: none;
    margin-left: auto;
    opacity: 0;
    padding: 0;
    transition: inherit;
  }
  li > button:focus {
    outline: none;
  }
  li > button::-moz-focus-inner {
    border: 0;
  }
  li > span {
    margin-right: 10px;
  }
  li > svg {
    display: inline-block;
    margin-right: 8px;
  }
  li:hover {
    background-color: rgba(144, 175, 197, 0.5);
  }
  li:hover > button {
    opacity: 1;
  }
  ul {
    font-size: 0.9em;
    list-style: none;
    margin-top: 10px;
    padding-left: 0;
  }
  ul > li:not(:last-child) {
    margin-bottom: 3px;
  }
`;

export const Label = styled(Button).attrs({
  as: 'label',
})`
  display: inline-block;

  svg {
    margin-right: 0.5rem;
    margin-top: 3px;
  }
`;

export default Span;

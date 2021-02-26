import styled, { css } from 'styled-components';

const Span = styled.span`
  align-items: center;
  color: ${(props) => props.theme.fontDark};
  display: ${(props) => (props.label ? 'inline-grid' : 'block')};
  grid-template-columns: auto 200px;

  input {
    border-color: #cccccc;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    box-sizing: border-box;
    color: inherit;
    font-family: inherit;
    font-size: 1em;
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
    height: 30px;
    padding: 0 10px;
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: ${(props) => props.theme.timingFunction};
    width: auto;
  }

  input:focus,
  input:hover {
    border-color: ${(props) => props.theme.colorPrimary1};
  }

  input:focus {
    outline: none;
    -webkit-focus-ring-color: none;
  }

  label {
    box-sizing: border-box;
    display: inline-block;
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    padding-right: 8px;
  }

  ${(props) => (props.vertical
    && css`& {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    input,
    label,
    .input__warning {
      width: 100%;
    }
    label {
      margin-bottom: 5px;
    }`
  )};
`;

export default Span;

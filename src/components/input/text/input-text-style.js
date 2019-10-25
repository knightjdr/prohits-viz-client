import styled from 'styled-components';

const Span = styled.span`
  align-items: center;
  color: ${props => props.theme.fontDark};
  display: inline-grid;
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
    transition-timing-function: ${props => props.theme.timingFunction};
    width: auto;
  }

  input:focus,
  input:hover {
    border-color: ${props => props.theme.colorPrimary1};
  }

  input:focus {
    outline: none;
    -webkit-focus-ring-color: none;
  }

  label {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    padding-right: 8px;
  }

  .input__warning {
    align-items: center;
    border-bottom: 1px dashed ${props => props.theme.warning};
    border-left: 1px dashed ${props => props.theme.warning};
    border-right: 1px dashed ${props => props.theme.warning};
    display: flex;
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
    justify-content: center;
  }
  .input__warning svg {
    color: ${props => props.theme.warning};
    height: 25px;
    margin-right: 5px;
  }
`;

export default Span;

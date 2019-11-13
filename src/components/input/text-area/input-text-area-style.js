import styled, { css } from 'styled-components';

const Span = styled.span`
  align-items: center;
  color: ${props => props.theme.fontDark};
  display: inline-grid;
  grid-template-columns: auto auto;
  width: 100%;

  textarea {
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
    padding: 5px 10px;
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: ${props => props.theme.timingFunction};
    width: 200px;
  }

  textarea:focus,
  textarea:hover {
    border-color: ${props => props.theme.colorPrimary1};
  }

  textarea:focus {
    outline: none;
    -webkit-focus-ring-color: none;
  }

  label {
    box-sizing: border-box;
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    padding-right: 8px;
  }

  .textarea__warning {
    align-items: center;
    border-bottom: 1px dashed ${props => props.theme.warning};
    border-left: 1px dashed ${props => props.theme.warning};
    border-right: 1px dashed ${props => props.theme.warning};
    display: flex;
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
    justify-content: center;
  }
  .textarea__warning svg {
    color: ${props => props.theme.warning};
    height: 25px;
    margin-right: 5px;
  }

  ${props => (props.vertical
    && css`& {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    textarea,
    label,
    .input__warning {
      width: 100%;
    }`
  )};
`;

export default Span;

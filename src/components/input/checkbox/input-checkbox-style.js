import styled from 'styled-components';

const Span = styled.span`
  color: ${props => props.theme.fontDark};

  input {
    appearance: none;
    height: 25px;
    opacity: 0;
    margin: 0;
    width: 25px;
  }

  label {
    padding-right: 8px;
  }

  .input__checkbox {
    display: inline-block;
    height: 25px;
    position: relative;
  }

  .input__checkbox span {
    align-items: center;
    background-color: #fff;
    border-color: #cccccc;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    box-sizing: border-box;
    color: inherit;
    display: inline-flex;
    font-family: inherit;
    font-size: 1.2em;
    height: 25px;
    justify-content: center;
    left: 0;
    margin: 0;
    padding: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: ${props => props.theme.timingFunction};
    width: 25px;
  }

  .input__checkbox svg {
    opacity: 0;
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ${props => props.theme.timingFunction};
  }

  input:focus + span,
  input:hover + span,
  .input__checkbox span:hover {
    border-color: ${props => props.theme.colorPrimary1};
  }

  input:checked + span > svg {
    color: ${props => props.theme.success};
    opacity: 1;
  }
`;

export default Span;

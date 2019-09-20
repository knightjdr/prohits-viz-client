import styled from 'styled-components';

const Span = styled.span`
  color: ${props => props.theme.fontDark};

  input {
    border-color: #cccccc;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    box-sizing: border-box;
    color: inherit;
    font-family: inherit;
    font-size: 1em;
    height: 30px;
    padding: 0 10px;
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: ${props => props.theme.timingFunction || 'ease'}
  }

  input:focus,
  input:hover {
    border-color: ${props => props.theme.colorPrimary1};
  }

  label {
    margin-right: 8px;
  }
`;

export default Span;

import styled from 'styled-components';

export const ConfirmWrapper = styled.span`
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
`;

const Span = styled.span`
  display: inline-block;
  padding: 5px;

  h1 {
    font-size: 1em;
  }
  h1 svg {
    color: ${props => props.theme.warning1};
    margin-right: 8px;
  }
  .popconfirm__buttons {
    display: flex;
    font-size: 0.8em;
    justify-content: flex-end;
    margin-top: 20px;
  }
  .popconfirm__buttons > button:first-child {
    margin-right: 8px;
  }
`;

export default Span;

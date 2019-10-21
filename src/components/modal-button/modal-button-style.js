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

  .chrome-picker {
    box-shadow: none !important;
  }
`;

export default Span;

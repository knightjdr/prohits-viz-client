import styled from 'styled-components';

export const ModalButtonWrapper = styled.span`
  display: inline-block;
  line-height: 0;

  .modal-button__button:focus {
    outline: none;
  }
  .modal-button__button::-moz-focus-inner {
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

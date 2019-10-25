import styled from 'styled-components';

const Span = styled.span`
  align-items: flex-start;
  display: inline-flex;

  &.input-with-button input {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  &.input-with-button button {
    border-radius: 0;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
    height: 30px;
    width: 30px;
  }
`;

export default Span;

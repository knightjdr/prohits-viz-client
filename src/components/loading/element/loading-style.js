import styled from 'styled-components';

const Span = styled.span`
  align-items: center;
  display: flex;
  padding: 5px 8px;

  .loading__error {
    color: ${props => props.theme.warning};
  }
  .loading__icon {
    margin-right: 10px;
  }
`;

export default Span;

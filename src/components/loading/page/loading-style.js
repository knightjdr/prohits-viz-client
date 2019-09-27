import styled from 'styled-components';

const Div = styled.div`
  align-items: center;
  display: flex;
  height: calc(100vh - 40px);
  justify-content: center;

  .loading__icon {
    color: ${props => props.theme.warning1};
    margin-right: 10px;
  }
`;

export default Div;

import styled from 'styled-components';

const Div = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: calc(100vh - 60px);
  justify-content: center;
  padding: 20px;

  .loading__icon {
    color: ${props => props.theme.warning};
    margin-right: 10px;
  }
`;

export default Div;

import styled from 'styled-components';

const Div = styled.div`
  margin: 5px;
  h1 {
    font-size: 1em;
    font-weight: 400;
  }
  h1 svg {
    color: ${props => props.theme.warning};
    margin-right: 8px;
  }
  .popconfirm__buttons {
    display: flex;
    font-size: 0.8em;
    justify-content: flex-end;
    margin-top: 10px;
  }
`;

export default Div;

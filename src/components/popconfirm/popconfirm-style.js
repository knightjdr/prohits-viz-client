import styled from 'styled-components';

const Div = styled.div`
  h1 {
    font-size: 1em;
  }
  h1 svg {
    color: ${props => props.theme.warning};
    margin-right: 8px;
  }
  .popconfirm__buttons {
    display: flex;
    font-size: 0.8em;
    justify-content: flex-end;
    margin-top: 20px;
  }
`;

export default Div;

import styled from 'styled-components';

const Div = styled.div`
  align-items: center;
  border-bottom: 1px dashed ${props => props.theme.warning};
  border-left: 1px dashed ${props => props.theme.warning};
  border-right: 1px dashed ${props => props.theme.warning};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding: 2px 5px;
  width: 100%;

  & > div {
    align-items: flex-start;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    width: 0;
  }

  & svg {
    color: ${props => props.theme.warning};
    height: 25px;
    margin-right: 5px;
  }
`;

export default Div;

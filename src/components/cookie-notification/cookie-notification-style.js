import styled from 'styled-components';

const Div = styled.div`
  box-sizing: border-box;
  bottom: 0;
  font-family: ${props => props.theme.fontStackPrimary};
  justify-content: center;
  padding: 0 10px;
  position: fixed;
  width: 100vw;

  &.hidden {
    display: none;
  }
  &.visible {
    display: flex;
  }

  & > div {
    align-items: center;
    background-color: #F9F982;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.3);
    display: flex;
    padding: 10px 15px;
  }
  a {
    margin: 0 5px;
  }
  p {
    margin: 0;
  }
  button {
    margin-left: 10px;
  }
`;

export default Div;

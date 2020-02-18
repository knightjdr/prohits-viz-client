import styled from 'styled-components';

const Div = styled.div`
  font-weight: bold;
  text-transform: uppercase;

  & > div {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  & > div::after,
  & > div::before {
    border-top: 1px solid #e8e8e8;
    content: '';
    flex: 1;
    position: relative;
  }

  & > div::after {
    margin-left: 20px;
  }
  & > div::before {
    margin-right: 20px;
  }
`;

export default Div;

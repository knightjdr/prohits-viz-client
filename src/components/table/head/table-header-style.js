import styled from 'styled-components';

const TableHeader = styled.div`
  background-color: #eee;
  box-sizing: border-box;
  display: grid;
  font-weight: bold;
  height: 48px;

  .table__header-cell {
    align-items: center;
    height: 27px;
    display: flex;
    justify-content: center;
    padding: 10px 5px;
  }

  .table__header-sort-button {
    all: unset;
    border-radius: 3px;
    display: inline-flex;
    flex-direction: column;
    margin-left: 3px;
    padding: 2px 4px;
    position: relative;
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: ${props => props.theme.timingFunction};
  }
  .table__header-sort-button > :not(:first-child) {
    margin-top: -5px;
  }
  .table__header-sort-button:focus {
    outline: none;
  }
  .table__header-sort-button::-moz-focus-inner {
    border: 0;
  }
  .table__header-sort-button:focus,
  .table__header-sort-button:hover {
    background-color: ${props => props.theme.colorPrimary3};
    color: ${props => props.theme.fontLight};
  }
`;

export default TableHeader;

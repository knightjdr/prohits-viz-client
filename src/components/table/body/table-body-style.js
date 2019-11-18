import styled from 'styled-components';

const TableBody = styled.div`
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  box-sizing: border-box;
  display: grid;
  font-size: 0.9em;
  height: calc(100% - 48px);
  overflow-x: hidden;
  overflow-y: auto;
  padding-top: 5px;

  .table__body-row_odd {
    background-color: #f5f5f5;
  }

  .table__body-cell {
    overflow: hidden;
    padding: 5px 2px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export default TableBody;

import styled from 'styled-components';

export const TableBody = styled.div`
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 0.9em;
  max-height: calc(100% - 48px);
  overflow-x: hidden;
  overflow-y: auto;

  .table__body {
    display: grid;
    padding-top: 5px;
  }

  .table__body-row_odd {
    background-color: #f5f5f5;
  }

  .table__body-cell {
    align-items: center;
    border-right: 5px solid transparent;
    box-sizing: border-box;
    display: inline-flex;
    height: 100%;
    justify-content: center;
    overflow: hidden;
    padding: 5px 0 5px 5px;
    white-space: nowrap;
  }
`;

export const TableBodyTooltip = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  font-weight: bold;
  padding: 5px;
`;

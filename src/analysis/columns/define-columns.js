import filterHeader from './filter-header';
import recommendedColumns from './recommended-columns';

const defaultColumns = ['abundance', 'condition', 'readout', 'score'];

const defineColumns = ({ fileType, header, type }, columns = defaultColumns) => (
  columns.reduce((accum, column) => ({
    ...accum,
    [column]: filterHeader(
      recommendedColumns[type][fileType][column],
      header,
    ),
  }), {})
);

export default defineColumns;

import Papa from 'papaparse';

/*
 * Read the values from a column or columns in a csv file. If the "columns"
 * variable is a string, a single column will be parsed and an array of values
 * in that column will be returned. If an array of columns is passed, an object
 * of arrays will be returned keyed by column name.
*/
const readCSVColumns = (file, columns) => (
  new Promise((resolve) => {
    let parser;
    let result;
    if (typeof columns === 'string') {
      result = [];
      parser = (row) => {
        if (row.data[columns]) {
          result.push(row.data[columns]);
        }
      };
    }
    if (Array.isArray(columns)) {
      result = {};
      columns.forEach((column) => {
        result[column] = [];
      });

      parser = (row) => {
        columns.forEach((column) => {
          if (row.data[column]) {
            result.data[column].push();
          }
        });
      };
    }

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      worker: true,
      step: (row) => {
        parser(row);
      },
      complete: () => {
        resolve(result);
      },
    });
  })
);

export default readCSVColumns;

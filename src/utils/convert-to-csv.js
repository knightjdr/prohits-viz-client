const convertToCsv = (header, order, rows, sep = ',') => {
  const headerString = header.join(sep);
  const csvArr = rows.map(row => (
    order.map(column => (
      row[column]
    )).join(sep)
  ));
  return [headerString, ...csvArr].join('\n');
};

export default convertToCsv;

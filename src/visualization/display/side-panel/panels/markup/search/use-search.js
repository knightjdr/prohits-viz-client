import { useSelector } from 'react-redux';

import { selectOrderedColumnNames } from '../../../../../../state/selector/visualization/column-selector';
import selectRows from '../../../../../../state/selector/visualization/row-selector';
import { selectData } from '../../../../../../state/selector/visualization/data-selector';

const createRegex = searchTerm => (
  new RegExp(searchTerm, 'i')
);

const findFirstMatch = matches => (
  Object.keys(matches).length > 0 ? Math.min(...Object.values(matches)) : -1
);

const findFirstMatches = matches => ({
  column: findFirstMatch(matches.columns),
  row: findFirstMatch(matches.rows),
});

const findNewPosition = (firstMatches, position, dimensions) => {
  const { column: firstColumn, row: firstRow } = firstMatches;

  let newX;
  if (firstColumn >= 0) {
    const limitX = dimensions.columns - dimensions.pageX;
    newX = firstColumn <= limitX ? firstColumn : limitX;
  } else {
    newX = position.x;
  }

  let newY;
  if (firstRow >= 0) {
    const limitY = dimensions.rows - dimensions.pageY;
    newY = firstRow <= limitY ? firstRow : limitY;
  } else {
    newY = position.y;
  }

  return {
    x: newX,
    y: newY,
  };
};

const hasMatch = firstMatches => (
  firstMatches.column >= 0 || firstMatches.row >= 0
);

const searchArray = (regex, arr) => (
  arr.reduce((accum, item, index) => {
    if (regex.test(item)) {
      return {
        ...accum,
        [item]: index,
      };
    }
    return accum;
  }, {})
);

export const searchElements = (regex, columns, rows) => ({
  columns: searchArray(regex, columns),
  rows: searchArray(regex, rows),
});

const useSearch = () => {
  const columns = useSelector(state => selectOrderedColumnNames(state));
  const dimensions = useSelector(state => selectData(state, 'dimensions'));
  const rows = useSelector(state => selectRows(state));
  const position = useSelector(state => selectData(state, 'position'));

  const search = (searchTerm) => {
    const searchRegex = createRegex(searchTerm);
    const matches = searchElements(searchRegex, columns, rows);
    const firstMatches = findFirstMatches(matches);
    const newPosition = findNewPosition(firstMatches, position, dimensions);
    return {
      columns: matches.columns,
      match: hasMatch(firstMatches),
      position: newPosition,
      rows: matches.rows,
    };
  };

  return search;
};

export default useSearch;

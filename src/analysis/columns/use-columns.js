import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import defineColumns from './define-columns';
import { selectState } from '../../state/selector/general';

const useColumns = (columnsToDefine) => {
  const form = useSelector(state => selectState(state, 'form'));

  const columns = useMemo(() => defineColumns(form, columnsToDefine), [columnsToDefine, form]);

  return columns;
};

export default useColumns;

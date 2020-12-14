import { useDispatch, useSelector } from 'react-redux';

import { selectState } from '../../../../state/selector/general';
import { setFormField } from '../../../../state/analysis/form-actions';

const useFormUpdate = () => {
  const dispatch = useDispatch();

  const form = useSelector((state) => selectState(state, 'form'));

  const handleChange = (e, id, value) => {
    dispatch(setFormField(id, value));
  };

  return [form, handleChange];
};

export default useFormUpdate;

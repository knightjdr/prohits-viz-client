import { useSelector } from 'react-redux';

import fetch from '../../utils/fetch';
import { selectState } from '../../state/selector/general';

const useFetch = () => {
  const session = useSelector((state) => selectState(state, 'session'));

  const fetchWrapper = async (route, options = {}) => {
    const optionsWithSession = {
      ...options,
      headers: {
        ...options.headers,
        session,
      },
    };
    return fetch(route, optionsWithSession);
  };

  return fetchWrapper;
};

export default useFetch;

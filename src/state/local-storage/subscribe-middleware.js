import { saveActions, saveActionKey } from './save-actions';
import { setLocalStorage } from '../../components/local-storage/local-storage';

const subscribeMiddleware = ({ getState }) => (
  (next) => (action) => {
    const result = next(action);
    if (saveActions.includes(result.type)) {
      const key = saveActionKey[result.type];
      const value = getState()[key];
      setLocalStorage(key, JSON.stringify(value));
    }
    return result;
  }
);

export default subscribeMiddleware;

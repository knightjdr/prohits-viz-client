import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import addCookies from './add-cookies';
import removeCookies from './remove-cookies';
import { selectStateProperty } from '../../state/selector/general';
import { storageSupport } from '../../components/local-storage/local-storage';
import { updateConsent } from '../../state/cookies/cookie-actions';

const useCookieConsent = () => {
  const dispatch = useDispatch();
  const consent = useSelector(state => selectStateProperty(state, 'cookies', 'consent'));

  useEffect(() => {
    if (consent) {
      addCookies();
    } else {
      removeCookies();
    }
  }, [consent]);

  const toggleConsent = (value) => {
    const newConsent = value !== undefined ? Boolean(value) : !consent;
    dispatch(updateConsent(newConsent));
  };

  const canConsent = process.env.NODE_ENV === 'production' && storageSupport();
  return [canConsent, consent, toggleConsent];
};

export default useCookieConsent;

import React from 'react';

import Privacy from './privacy';
import useCookieConsent from '../../hooks/cookie-consent/use-cookie-consent';

const PrivacyContainer = () => {
  const [canConsent, haveConsent, setConsent] = useCookieConsent();

  const toggleConsent = () => {
    setConsent(!haveConsent);
  };

  return (
    <Privacy
      canConsent={canConsent}
      handleChange={toggleConsent}
      haveConsent={Boolean(haveConsent)}
    />
  );
};

export default PrivacyContainer;

import React, { useRef } from 'react';

import CookieNotification from './cookie-notification';
import useClickOutside from '../../hooks/click-outside/use-click-outside';
import useCookieConsent from '../../hooks/cookie-consent/use-cookie-consent';

const CookieNotificationContainer = () => {
  const [canConsent, haveConsent, setConsent] = useCookieConsent();
  const ref = useRef(null);

  const closeNotification = () => {
    setConsent(true);
  };

  useClickOutside(ref, closeNotification);

  return (
    <CookieNotification
      closeHandler={closeNotification}
      isOpen={canConsent && haveConsent === undefined}
      ref={ref}
    />
  );
};

export default CookieNotificationContainer;

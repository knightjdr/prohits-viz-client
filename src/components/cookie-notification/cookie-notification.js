import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { faTimesCircle } from '@fortawesome/pro-solid-svg-icons';

import IconButton from '../buttons/icon/button';
import Link from '../link/text/link';
import StyledCookieNotification from './cookie-notification-style';

const CookieNotification = forwardRef((
  {
    closeHandler,
    isOpen,
  },
  ref,
) => (
  <StyledCookieNotification className={isOpen ? 'visible' : 'hidden'}>
    <div ref={ref}>
      <p>
        This site uses cookies to record usage for grant reporting purposes. See our
        <Link
          href="/help/privacy"
          outline={false}
          visited={false}
        >
          privacy policy
        </Link>
        to learn more.
      </p>
      <IconButton
        icon={faTimesCircle}
        onClick={closeHandler}
        type="button"
      />
    </div>
  </StyledCookieNotification>
));

CookieNotification.propTypes = {
  closeHandler: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default CookieNotification;

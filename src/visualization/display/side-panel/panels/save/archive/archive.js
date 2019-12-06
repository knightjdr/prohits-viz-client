import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faExclamationCircle } from '@fortawesome/pro-duotone-svg-icons';

import IconButton from '../../../../../../components/buttons/icon/button';
import Link from '../../../../../../components/link/text/link';
import Section from '../../section/section';

import './archive.css';

const Archive = ({
  handleArchive,
}) => (
  <Section title="Archive">
    <div className="panel__save-archive">
      <div className="panel__save-archive-container-button">
        <span>Archive:</span>
        <IconButton
          disabled
          icon={faArchive}
          onClick={handleArchive}
        />
      </div>
      <p>
        <FontAwesomeIcon icon={faExclamationCircle} />
        Archiving an image will generate a new URL that can be used to access your session
        from any browser. These sessions will be saved for three months. If you would like
        to have your session permanently archived, please send us the URL. See the
        {' '}
        <Link
          href="/help"
          visited={false}
        >
          help
        </Link>
        {' '}
        more.
      </p>
    </div>
  </Section>
);

Archive.propTypes = {
  handleArchive: PropTypes.func.isRequired,
};

export default Archive;
import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faExclamationCircle } from '@fortawesome/pro-duotone-svg-icons';

import ArchiveModal from './archive-modal';
import ArchivingStatus from './archiving-status';
import IconButton from '../../../../../../components/buttons/icon/button';
import Link from '../../../../../../components/link/text/link';
import Section from '../../section/section';

import './archive.css';

const Archive = ({
  archiving,
  error,
  handleArchive,
  handleClose,
  handleCopy,
  helpLink,
  isArchiveModelOpen,
  message,
  route,
}) => (
  <Section
    helpLink={helpLink}
    title="Archive"
  >
    <div className="panel__save-archive">
      <div className="panel__save-archive-container-button">
        <span>Archive:</span>
        <IconButton
          icon={faArchive}
          onClick={handleArchive}
        />
      </div>
      <ArchivingStatus
        archiving={archiving}
        error={error}
        message={message}
      />
      <p>
        <FontAwesomeIcon icon={faExclamationCircle} />
        Archiving a session will generate a new URL that can be used to access your session
        from any browser. These sessions will be saved for three months. If you would like
        to have your session permanently archived, please send us the URL. See the
        {' '}
        <Link
          to={helpLink}
          visited={false}
        >
          help
        </Link>
        {' '}
        for more.
      </p>
    </div>
    <ArchiveModal
      handleClose={handleClose}
      handleCopy={handleCopy}
      isOpen={isArchiveModelOpen}
      route={route}
    />
  </Section>
);

Archive.propTypes = {
  archiving: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  handleArchive: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleCopy: PropTypes.func.isRequired,
  helpLink: PropTypes.string.isRequired,
  isArchiveModelOpen: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default Archive;

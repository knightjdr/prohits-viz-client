import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../../../../../components/buttons/rectangular/button';
import Link from '../../../../../../components/link/text/link';
import Modal from '../../../../../../components/modal/modal-container';

const ArchiveModal = ({
  handleClose,
  handleCopy,
  isOpen,
  route,
}) => (
  <Modal
    background={false}
    deps={[route]}
    handleClose={handleClose}
    footer={(
      <div className="panel__save-archive-modal-footer">
        <Button
          onClick={handleCopy}
          kind="success"
        >
          Copy URL
        </Button>
        <Button
          onClick={handleClose}
          kind="warning"
        >
          Close
        </Button>
      </div>
    )}
    isOpen={isOpen}
    name="archive-modal-status"
    title="ARCHIVE"
  >
    <p style={{ marginTop: 0 }}>
      Your session has been archived to the URL below and will be available for three months:
    </p>
    <div>
      <Link
        to={route}
        visited={false}
      >
        {`${process.env.REACT_APP_WS_HOST}${route}`}
      </Link>
    </div>
  </Modal>
);

ArchiveModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleCopy: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  route: PropTypes.string.isRequired,
};

export default ArchiveModal;

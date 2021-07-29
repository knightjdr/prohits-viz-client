import PropTypes from 'prop-types';
import React from 'react';

import FileText from './file-text';
import Modal from '../../components/modal/modal-container';
import ModalContent from './modal-content';
import ModalFooter from './modal-footer';

import './task-modal.css';

const TaskModal = ({
  download,
  downloading,
  fetchingText,
  handleChangeFile,
  handleClose,
  status,
  taskID,
  text,
  viewText,
  viewImage,
}) => (
  <Modal
    footer={(
      <ModalFooter
        download={download}
        downloading={downloading}
        handleClose={handleClose}
        status={status.status}
        taskID={taskID}
        tool={status.tool}
      />
    )}
    isOpen
    name="task-modal"
    title={`TASK: ${taskID}`}
  >
    <ModalContent
      handleChangeFile={handleChangeFile}
      status={status}
      taskID={taskID}
      viewText={viewText}
      viewImage={viewImage}
    />
    <FileText
      fetchingText={fetchingText}
      text={text}
    />
  </Modal>
);

TaskModal.defaultProps = {
  status: {},
};

TaskModal.propTypes = {
  download: PropTypes.func.isRequired,
  downloading: PropTypes.bool.isRequired,
  fetchingText: PropTypes.bool.isRequired,
  handleChangeFile: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  status: PropTypes.shape({
    files: PropTypes.arrayOf(PropTypes.string),
    primaryFile: PropTypes.string,
    status: PropTypes.string,
    tool: PropTypes.string,
  }),
  taskID: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  viewText: PropTypes.func.isRequired,
  viewImage: PropTypes.func.isRequired,
};

export default TaskModal;

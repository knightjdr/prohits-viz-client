import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { navigate } from 'hookrouter';
import { useSelector } from 'react-redux';

import TaskModal from './task-modal';

import getFile from '../../utils/get-file';
import fetch from '../../utils/fetch';
import { selectStateProperty } from '../../state/selector/general';

const TaskModalContainer = ({
  handleClose,
  taskID,
}) => {
  const [fetchingText, setFetchingText] = useState(false);
  const [text, setText] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const status = useSelector(state => selectStateProperty(state, 'tasks', taskID));

  const download = () => {
    const options = {
      ext: 'zip',
      name: `${status.tool}-${taskID}`,
    };
    getFile(`/task/${taskID}`, options);
  };

  const fetchText = async (file) => {
    setFetchingText(true);
    const route = `/task/${taskID}/${file}`;
    const response = await fetch(route, {}, 'text');
    setFetchingText(false);
    if (!response.error) {
      setText(response.data);
    } else {
      setText(`There was a problem retrieving the ${file} file`);
    }
  };

  const handleChangeFile = (e, id, value) => {
    setSelectedFile(value);
    setText('');
  };

  const viewText = (e) => {
    fetchText(e.target.dataset.file);
  };

  const viewImage = () => {
    const file = selectedFile || status.primaryFile;
    if (file === 'error' || file === 'log') {
      fetchText(file);
    } if (file) {
      navigate(`/visualization/${taskID}/${file}`);
    }
  };

  return (
    <TaskModal
      download={download}
      fetchingText={fetchingText}
      handleChangeFile={handleChangeFile}
      handleClose={handleClose}
      status={status}
      taskID={taskID}
      text={text}
      viewText={viewText}
      viewImage={viewImage}
    />
  );
};

TaskModalContainer.propTypes = {
  handleClose: PropTypes.func.isRequired,
  taskID: PropTypes.string.isRequired,
};

const ShowWrapper = ({
  taskID,
  ...props
}) => (
  taskID && <TaskModalContainer taskID={taskID} {...props} />
);

ShowWrapper.propTypes = {
  handleClose: PropTypes.func.isRequired,
  taskID: PropTypes.string.isRequired,
};

export default ShowWrapper;

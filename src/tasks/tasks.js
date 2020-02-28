import PropTypes from 'prop-types';
import React from 'react';

import Loading from './loading';
import Table from './table/task-table-container';
import TextModal from './text-modal/text-modal-container';

const Tasks = ({
  errorStatus,
  fetchStatus,
  isLoading,
  taskHandlers,
  tasks,
}) => (
  <>
    <Loading errorStatus={errorStatus} isLoading={isLoading} />
    {
      errorStatus === 0 && !isLoading
      && (
        <Table
          download={taskHandlers.download}
          fetchStatus={fetchStatus}
          handleChangeFile={taskHandlers.handleChangeFile}
          tasks={tasks}
          viewImage={taskHandlers.viewImage}
        />
      )
    }
    <TextModal
      fetchingText={taskHandlers.fetchingText}
      selectedFile={taskHandlers.selectedFile}
      text={taskHandlers.text}
    />
  </>
);

Tasks.propTypes = {
  errorStatus: PropTypes.number.isRequired,
  fetchStatus: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  taskHandlers: PropTypes.shape({
    download: PropTypes.func.isRequired,
    fetchingText: PropTypes.bool.isRequired,
    handleChangeFile: PropTypes.func.isRequired,
    selectedFile: PropTypes.string,
    text: PropTypes.string,
    viewImage: PropTypes.func.isRequired,
  }).isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default Tasks;

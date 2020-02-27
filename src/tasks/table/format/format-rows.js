import convertIsoDate from '../../../utils/convert-iso-date';

const formatRows = tasks => (
  tasks.map(task => ({
    date: {
      content: convertIsoDate(task.date, true),
    },
    files: {
      content: task.files.join(', '),
    },
    id: {
      content: task.id,
    },
    rowID: task.id,
    status: {
      content: task.status,
    },
    tool: {
      content: task.tool,
    },
  }))
);

export default formatRows;

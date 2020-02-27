const fields = ['cookies', 'tasks'];

export const filterTasks = (data) => {
  if (!data) {
    return undefined;
  }

  const currentDate = new Date();
  const tasks = JSON.parse(data);
  const filtered = Object.entries(tasks).reduce((accum, [task, status]) => {
    if (
      task === 'samplefile'
      || !status.date
      || currentDate - new Date(status.date) > 86400000
    ) {
      return accum;
    }
    return {
      ...accum,
      [task]: status,
    };
  }, {});

  return Object.keys(filtered).length > 0 ? filtered : undefined;
};

const parseField = (field, data) => {
  if (field === 'tasks') {
    return filterTasks(data);
  }
  if (data) {
    return JSON.parse(data);
  }
  return undefined;
};

const reHydrateStore = () => (
  fields.reduce((accum, field) => {
    const data = localStorage.getItem(field);
    return {
      ...accum,
      [field]: parseField(field, data),
    };
  }, {})
);

export default reHydrateStore;

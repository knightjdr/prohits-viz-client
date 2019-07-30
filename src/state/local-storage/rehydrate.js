const reHydrateStore = () => {
  const data = localStorage.getItem('reduxState');
  if (data) {
    return JSON.parse(data);
  }
  return undefined;
};

export default reHydrateStore;

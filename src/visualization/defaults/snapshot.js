const fillSnapshot = (file, func, ...args) => (
  Object.entries(file).reduce((accum, [id, snapshot]) => ({
    ...accum,
    [id]: func(snapshot, ...args, id),
  }), {})
);

export default fillSnapshot;

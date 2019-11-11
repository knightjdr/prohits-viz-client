const fillSnapshot = (file, func) => (
  Object.entries(file).reduce((accum, [id, snapshot]) => ({
    ...accum,
    [id]: func(snapshot),
  }), {})
);

export default fillSnapshot;

const importAll = (context) => (
  context.keys().reduce((accum, item) => ({
    ...accum,
    [item.replace('./', '')]: context(item).default,
  }), {})
);

export default importAll;

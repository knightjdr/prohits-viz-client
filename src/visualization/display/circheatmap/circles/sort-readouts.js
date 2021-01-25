const sortAlgorithm = (byKnown) => {
  if (byKnown) {
    return (a, b, values) => {
      if (!values[b][0] && values[a][0]) {
        return -1;
      } if (values[b][0] && !values[a][0]) {
        return 1;
      }
      return values[b][1] - values[a][1];
    };
  }
  return (a, b, values) => values[b][1] - values[a][1];
};

const sortReadouts = (readouts, options) => {
  const { byKnown, sortBy } = options;

  const indices = Array.from(Array(readouts.length)).map((c, index) => index);

  const attributes = Object.keys(readouts[0].segments);
  const values = readouts.map((readout) => [readout.known, readout.segments[sortBy]]);
  const sortMethod = sortAlgorithm(byKnown);

  indices.sort((a, b) => sortMethod(a, b, values));

  const circles = attributes.reduce((accum, attribute) => ({ ...accum, [attribute]: [] }), {});
  const names = [];
  indices.forEach((index) => {
    names.push(readouts[index].name);
    Object.entries(readouts[index].segments).forEach(([attribute, value]) => {
      circles[attribute].push(value);
    });
  });

  return {
    names,
    circles,
  };
};

export default sortReadouts;

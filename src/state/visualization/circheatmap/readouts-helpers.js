export const filterReadouts = (readouts, circles, readoutIDs = []) => {
  const filtered = readoutIDs.length > 0
    ? readoutIDs.map((id) => readouts.find((readout) => readout.label === id))
    : readouts;

  return filtered.filter((readout) => (
    circles.every((circle) => Math.abs(readout.segments[circle.attribute]) >= Math.abs(circle.filter))
  ));
};

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

export const sortReadouts = (readouts, options) => {
  const { byKnown, maxReadouts, sortBy } = options;

  let indices = Array.from(Array(readouts.length)).map((c, index) => index);

  const values = readouts.map((readout) => [readout.known, readout.segments[sortBy]]);
  const sortMethod = sortAlgorithm(byKnown);

  indices.sort((a, b) => sortMethod(a, b, values));
  indices = indices.splice(0, maxReadouts);

  return indices.map((index) => readouts[index]);
};

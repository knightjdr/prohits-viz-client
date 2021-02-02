const filterReadouts = (readouts, circles, readoutOrder = []) => {
  const filtered = readoutOrder.length > 0
    ? readoutOrder.map((index) => readouts[index])
    : readouts;

  return filtered.filter((readout) => (
    circles.every((circle) => readout.segments[circle.attribute] >= circle.min)
  ));
};

export default filterReadouts;

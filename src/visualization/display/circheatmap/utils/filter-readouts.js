const filterReadouts = (readouts, circles) => (
  readouts.filter((readout) => (
    circles.every((circle) => readout.segments[circle.attribute] >= circle.min)
  ))
);

export default filterReadouts;

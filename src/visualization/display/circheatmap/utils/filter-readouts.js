const filterReadouts = (readouts, circles) => (
  readouts.filter((readout) => (
    circles.every((circle) => readout.segments[circle.name] >= circle.min)
  ))
);

export default filterReadouts;

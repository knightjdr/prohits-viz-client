const defineCircles = (readouts) => {
  const attributes = Object.keys(readouts[0].segments);
  const circles = attributes.reduce((accum, attribute) => ({ ...accum, [attribute]: [] }), {});
  const names = [];
  readouts.forEach((readout) => {
    names.push(readout.name);
    Object.entries(readout.segments).forEach(([attribute, value]) => {
      circles[attribute].push(value);
    });
  });

  return {
    names,
    circles,
  };
};

export default defineCircles;

const extractSelectedData = (rect, cursorOptions) => {
  const { ref, scale } = cursorOptions;
  const { left, top } = ref.getBoundingClientRect();

  const x = {
    start: left + (scale * rect.position.x),
    end: left + (scale * (rect.position.x + rect.size.width)),
  };
  const y = {
    start: top + (scale * rect.position.y),
    end: top + (scale * (rect.position.y + rect.size.height)),
  };

  const points = document.querySelectorAll('.scatter-point');
  const selected = [];
  points.forEach((point) => {
    const pointRect = point.getBoundingClientRect();
    const center = {
      x: pointRect.left + (pointRect.width / 2),
      y: pointRect.top + (pointRect.height / 2),
    };
    if (center.x >= x.start && center.x <= x.end && center.y >= y.start && center.y <= y.end) {
      const { index } = point.dataset;
      selected.push(Number(index));
    }
  });

  return selected;
};

export default extractSelectedData;

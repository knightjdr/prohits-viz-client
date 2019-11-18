const TABLE_BODY_PADDING = 7;
const TABLE_HEADER_HEIGHT = 48;

const calculateHeight = (ref, rows, rowHeight) => {
  const parent = ref.parentNode;
  const { height: parentHeight } = parent.getBoundingClientRect();

  const availableHeight = parentHeight;
  const neededHeight = rows.length * rowHeight + TABLE_HEADER_HEIGHT + TABLE_BODY_PADDING;
  return neededHeight < availableHeight ? neededHeight : availableHeight;
};

export default calculateHeight;

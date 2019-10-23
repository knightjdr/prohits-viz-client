const calculatePageOutline = (dimensions, position) => ({
  height: `${(dimensions.pageY / dimensions.rows) * 100}%`,
  left: `${(position.x / dimensions.columns) * 100}%`,
  top: `${(position.y / dimensions.rows) * 100}%`,
  width: `${(dimensions.pageX / dimensions.columns) * 100}%`,
});

export default calculatePageOutline;

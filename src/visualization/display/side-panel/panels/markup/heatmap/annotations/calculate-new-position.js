import round from '../../../../../../../utils/round';

const calculateNewPosition = (dimensions, position) => {
  const x = round((position.x + (dimensions.pageX / 2)) / dimensions.columns, 2);
  const y = round((position.y + (dimensions.pageY / 2)) / dimensions.rows, 2);
  return { x, y };
};

export default calculateNewPosition;

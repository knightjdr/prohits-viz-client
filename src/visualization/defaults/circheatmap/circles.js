import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';
import sort from '../../../utils/sort';

export const defaultState = {
  hidden: [],
};

const defaultCircle = {
  color: 'blue',
  filter: 0,
  max: 50,
  min: 0,
};

const defineCirclesFromAttributes = (attributes) => {
  attributes.sort(sort.character);
  return attributes.map((attribute) => ({
    ...defaultCircle,
    attribute,
  }));
};

const validateCircles = (order, defaultOrder) => {
  if (!Array.isArray(order)) {
    return defaultOrder;
  }
  return order.map((circle) => ({
    attribute: circle.attribute,
    color: circle.color || defaultCircle.color,
    filter: circle.filter || defaultCircle.filter,
    max: circle.max || defaultCircle.max,
    min: circle.min || defaultCircle.min,
  }));
};

export const fillSnapshotCircles = (inputCircles, defaultCircleOrder) => {
  const {
    defaultOrder,
    hidden,
    order,
  } = inputCircles;

  const validatedOrder = validateCircles(order, defaultCircleOrder);
  return {
    defaultOrder: validateCircles(defaultOrder, validatedOrder),
    hidden: validateCircles(hidden, defaultState.hidden),
    order: validatedOrder,
  };
};

const fillCircles = (fileCircles, plots) => {
  const defaultCircleOrder = defineCirclesFromAttributes(Object.keys(plots[0]?.readouts[0]?.segments));

  let circles = fileCircles;
  if (!circles || !isObject(circles) || Object.keys(circles).length === 0) {
    return {
      main: {
        ...defaultState,
        defaultOrder: defaultCircleOrder,
        order: defaultCircleOrder,
      },
    };
  } if (isObject(circles) && Object.keys(circles).length > 0 && !circles.main) {
    circles = {
      main: fillSnapshotCircles(circles, defaultCircleOrder),
    };
  }

  return fillSnapshots(circles, fillSnapshotCircles, defaultCircleOrder);
};

export default fillCircles;

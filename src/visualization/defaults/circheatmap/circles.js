import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';
import sort from '../../../utils/sort';
import { validateArray } from '../../../utils/validate-type';

export const defaultState = {
  hidden: [],
};

const defineCirclesFromAttributes = (attributes) => {
  attributes.sort(sort.character);
  return attributes.map((attribute) => ({
    color: 'blue',
    max: 50,
    min: 0,
    name: attribute,
  }));
};

export const fillSnapshotCircles = (inputCircles, attributes) => {
  const {
    defaultOrder,
    hidden,
    order,
  } = inputCircles;

  const validatedOrder = validateArray(order, attributes);
  return {
    defaultOrder: validateArray(defaultOrder, validatedOrder),
    hidden: validateArray(hidden, defaultState.hidden),
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
      main: { ...circles },
    };
  }

  return fillSnapshots(circles, fillSnapshotCircles, defaultCircleOrder);
};

export default fillCircles;

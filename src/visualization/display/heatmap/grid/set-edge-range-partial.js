/* Return a function that will map a range of numbers to one of three integers.
** Checks to make sure the input number is within the input range. i.e
** if the the range is from 0 - 100, input numbers will get mapped to
** either 25, 50 or 100. */

const setEdgeRangePartial = (primaryFilter, secondaryFilter, scoreType, outMin, outMax) => {
  const outputRange = outMax - outMin;
  const first = outMax;
  const second = Math.round((outputRange / 2) + outMin);
  const third = Math.round((outputRange / 4) + outMin);
  if (scoreType === 'gte') {
    return (inputNum) => {
      if (inputNum >= primaryFilter) {
        return first;
      } if (
        inputNum < primaryFilter
        && inputNum >= secondaryFilter
      ) {
        return second;
      }
      return third;
    };
  }
  return (inputNum) => {
    if (inputNum <= primaryFilter) {
      return first;
    } if (
      inputNum > primaryFilter
      && inputNum <= secondaryFilter
    ) {
      return second;
    }
    return third;
  };
};

export default setEdgeRangePartial;

/* Return a function that will map a number to an output integer range.
** Checks to make sure the input number is within the input range. */

const setRangePartial = (inMin, inMax, outMin, outMax) => {
  const inputRange = inMax - inMin;
  const outputRange = outMax - outMin;
  return (inputNum) => {
    let num = inputNum;
    if (inputNum > inMax) {
      num = inMax;
    } else if (inputNum < inMin) {
      num = inMin;
    }
    return Math.round((((num - inMin) * outputRange) / inputRange) + outMin);
  };
};

export default setRangePartial;

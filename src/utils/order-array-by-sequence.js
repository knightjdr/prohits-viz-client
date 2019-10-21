const orderArrayBySequence = (arr, sequence) => {
  const arrayLength = arr.length;
  if (arrayLength <= sequence.length) {
    return sequence.reduce((accum, element) => {
      if (element < arrayLength) {
        return [...accum, arr[element]];
      }
      return accum;
    }, []);
  }
  return sequence.map(element => arr[element]);
};

export default orderArrayBySequence;

/* Return an array of indices that indicates the position of the sorted elements
with respect to the original elements */
const sortOrder = (arr, returnSortedArr = false) => {
  const order = Array.from(Array(arr.length).keys())
    .sort((a, b) => {
      if (arr[a] < arr[b]) {
        return -1;
      } if (arr[b] < arr[a]) {
        return 1;
      }
      return 0;
    });

  if (returnSortedArr) {
    return [order, order.map((index) => arr[index])];
  }
  return order;
};

export default sortOrder;

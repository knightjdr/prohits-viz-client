const createOptions = (names, indices) => (
  indices.map((index) => ({
    index,
    name: names[index],
  }))
);

const definePoiOptions = (names, order, poi) => {
  const unselected = order.filter((item) => !poi.includes(item));
  return {
    names: names.map((name) => name.toLowerCase()),
    poi: createOptions(names, poi),
    poiOrder: poi,
    unselected: createOptions(names, unselected),
    unselectedOrder: unselected,
  };
};

export default definePoiOptions;

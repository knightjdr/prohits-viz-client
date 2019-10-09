const shouldDisable = (position, vertex, length, page) => ({
  down: position[vertex] >= length - page,
  up: position[vertex] === 0,
});

export default shouldDisable;

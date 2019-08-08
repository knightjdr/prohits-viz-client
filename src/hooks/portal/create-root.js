const createRootElement = (id) => {
  let root = document.querySelector(`#${id}`);
  if (!root) {
    root = document.createElement('div');
    root.setAttribute('id', id);
    document.body.appendChild(root);
  }
  return root;
};

export default createRootElement;

const createRootElement = (id) => {
  let root = document.getElementById(id);
  if (!root) {
    root = document.createElement('div');
    root.setAttribute('id', id);
    const app = document.querySelector('.app');
    app.appendChild(root);
  }
  return root;
};

export default createRootElement;

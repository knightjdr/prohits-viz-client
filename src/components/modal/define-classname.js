const defineClassName = (isOpen, wasOpen) => {
  let className;
  if (isOpen) {
    className = 'open';
  } else if (!isOpen && wasOpen) {
    className = 'closed';
  }

  return className;
};

export default defineClassName;

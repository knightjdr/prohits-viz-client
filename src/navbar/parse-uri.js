const parseURI = (uri) => {
  const path = uri.substr(1);
  if (!path) {
    return 'home';
  }
  return path.split('/')[0];
};

export default parseURI;

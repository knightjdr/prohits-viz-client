/* eslint no-useless-escape: "off" */

// Ensures uri is a valid PNG.
const ValidateURI = (image) => {
  const regex = /^\s*data:image\/png(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*/i;
  return regex.test(image);
};

export default ValidateURI;

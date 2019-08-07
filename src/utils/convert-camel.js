/* ConvertCamel converts a camel case string to a space separated string in
** lowercase */

const ConvertCamel = text => (
  text.replace(/([A-Z])/g, ' $1').toLowerCase()
);
export default ConvertCamel;

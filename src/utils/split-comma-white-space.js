import removeDuplicates from './remove-duplicates';

const reQuotes = /['"]+/g;
const reSeparator = /[\s,]+/;

const splitStringByCommaAndWhiteSpace = (text) => {
  const arr = text.trim().split(reSeparator).filter((string) => string);
  return removeDuplicates(arr.map((string) => string.toLowerCase().replace(reQuotes, '')));
};

export default splitStringByCommaAndWhiteSpace;

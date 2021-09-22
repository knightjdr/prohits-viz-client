import removeDuplicates from './remove-duplicates';

const reQuotes = /['"]+/g;
const reSeparator = /[\s,]+/;

const splitStringByCommaAndWhiteSpace = (text, caseInsensitive = true) => {
  const textTransform = caseInsensitive
    ? (string) => string.toLowerCase()
    : (string) => string;

  const arr = text.trim().split(reSeparator).filter((string) => string);
  return removeDuplicates(arr.map((string) => textTransform(string).replace(reQuotes, '')));
};

export default splitStringByCommaAndWhiteSpace;

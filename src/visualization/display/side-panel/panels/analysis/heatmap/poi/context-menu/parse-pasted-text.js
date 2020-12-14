import removeDuplicates from '../../../../../../../../utils/remove-duplicates';

const reQuotes = new RegExp(/['"]+/g);
const reSeparator = new RegExp(/[\s,]+/);

const parsePastedList = (text) => {
  const arr = text.trim().split(reSeparator).filter((string) => string);
  return removeDuplicates(arr.map((string) => string.toLowerCase().replace(reQuotes, '')));
};

export default parsePastedList;

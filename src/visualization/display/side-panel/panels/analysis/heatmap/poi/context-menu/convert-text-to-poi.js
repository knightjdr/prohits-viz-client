import parsePastedText from './parse-pasted-text';
import removeDuplicates from '../../../../../../../../utils/remove-duplicates';

const convertTextToPOI = (text, availableNames, currentOrder) => {
  const pastedNames = parsePastedText(text);
  const pastedIndices = pastedNames.reduce((accum, name) => {
    const indexOfName = availableNames.indexOf(name);
    return indexOfName >= 0 ? [...accum, indexOfName] : accum;
  }, []);
  return removeDuplicates([...currentOrder, ...pastedIndices]);
};

export default convertTextToPOI;

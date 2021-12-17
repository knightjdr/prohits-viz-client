import readFileLines from '../../utils/read-file-lines';
import parseString from '../../utils/parse-string';

const ParseHeader = async (file) => {
  try {
    const { type } = file;
    const headerString = await readFileLines(file);
    return parseString(headerString, type);
  } catch (error) {
    return [];
  }
};

export default ParseHeader;

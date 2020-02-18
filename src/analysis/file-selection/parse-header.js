import ReadFileLines from '../../utils/read-file-lines';
import ParseString from '../../utils/parse-string';

const ParseHeader = async (file) => {
  try {
    const { type } = file;
    const headerString = await ReadFileLines(file);
    return ParseString(headerString, type);
  } catch (error) {
    return [];
  }
};

export default ParseHeader;

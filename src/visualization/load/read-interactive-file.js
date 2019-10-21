import parseIfJson from '../../utils/parse-if-json';
import readFile from '../../utils/read-file';

const readInteractiveFile = async (file) => {
  const fileContents = await readFile(file);
  const data = parseIfJson(fileContents);

  if (!data) {
    throw new Error('Invalid file format');
  }

  return data;
};

export default readInteractiveFile;

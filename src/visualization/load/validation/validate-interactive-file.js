import validateParameters from './validate-parameters';
import validateFields from './validate-fields';
import readInteractiveFile from '../read-interactive-file';

const validateInteractiveFile = async (file) => {
  const data = await readInteractiveFile(file);

  const { parameters } = data;

  validateParameters(parameters);
  validateFields(parameters.imageType, data);

  return data;
};

export default validateInteractiveFile;

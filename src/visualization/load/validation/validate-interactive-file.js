import * as Comlink from 'comlink';

import validateParameters from './validate-parameters';
import validateFields from './validate-fields';
import readInteractiveFile from '../read-interactive-file';

const interactiveFile = {
  data: {},
  async run(file) {
    this.data = await readInteractiveFile(file);

    const { parameters } = this.data;

    validateParameters(parameters);
    validateFields(parameters.imageType, this.data);
  },
};

export default interactiveFile;

Comlink.expose(interactiveFile);

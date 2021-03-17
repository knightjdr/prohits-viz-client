import download from './download';
import fetch from './fetch';

const getFile = async (route, options = {}, callback) => {
  try {
    const ext = options.ext || 'txt';
    const name = options.name || 'file';
    const onSuccess = callback || download;
    const responseType = options.responseType || 'blob';

    const response = await fetch(route, { responseType });
    if (response.error) {
      throw Error(response.statusText);
    }

    const filename = `${name}.${ext}`;
    await onSuccess(response.data, filename);
    return {};
  } catch (error) {
    if (
      options.err
      && typeof options.err === 'function'
    ) {
      options.err(error.string);
    }
    return { error };
  }
};

export default getFile;

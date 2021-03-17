const axios = require('axios').default;

const defaultOptions = {
  data: {},
  headers: {},
  method: 'GET',
  onUploadProgress: null,
  responseType: 'json',
};

const fillOptions = (options) => {
  const fetchOptions = Object.entries(defaultOptions).reduce((accum, [key, value]) => ({
    ...accum,
    [key]: options[key] ?? value,
  }), {});

  if (fetchOptions.method === 'POST' && !(fetchOptions.data instanceof FormData)) {
    fetchOptions.data = JSON.stringify(fetchOptions.data);
  } if (fetchOptions.method === 'POST') {
    fetchOptions.headers['Content-Type'] = 'application/json';
  }

  if (Object.keys(fetchOptions.headers).length === 0) {
    delete fetchOptions.headers;
  }

  return fetchOptions;
};

const fetchWrapper = async (route, settings = {}) => {
  try {
    const url = `${process.env.REACT_APP_API}${route}`;
    const options = fillOptions(settings);

    const response = await axios({
      url,
      ...options,
    });

    return { data: response.data };
  } catch (error) {
    if (error.response) {
      return {
        data: error.response.data,
        error: true,
        message: error.response.statusText,
      };
    }
    return {
      error: true,
      message: error.message,
    };
  }
};

export default fetchWrapper;

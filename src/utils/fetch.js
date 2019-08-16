import axios from 'axios';

const defaultOptions = {
  data: {},
  headers: {},
  method: 'GET',
};

const fillOptions = (url, options) => {
  const axiosOptions = Object.entries(defaultOptions).reduce((accum, [key, value]) => ({
    ...accum,
    [key]: options[key] || value,
  }), {});
  axiosOptions.url = url;

  if (axiosOptions.method !== 'POST') {
    delete axiosOptions.data;
  }
  if (Object.keys(axiosOptions.headers).length === 0) {
    delete axiosOptions.headers;
  }

  return axiosOptions;
};

const fetch = async (route, options = {}) => {
  try {
    const url = `${process.env.REACT_APP_API}${route}`;
    const axiosOptions = fillOptions(url, options);
    const result = await axios(axiosOptions);
    return result;
  } catch (error) {
    return {
      ...error.response,
      error: true,
    };
  }
};

export default fetch;

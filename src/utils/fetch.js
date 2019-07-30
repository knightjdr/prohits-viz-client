import axios from 'axios';

const fetch = async (route, method = 'GET', data = {}) => {
  try {
    const url = `${process.env.REACT_APP_API_ROOT}${route}`;
    const options = {
      method,
      url,
    };
    if (method === 'POST') {
      options.data = data;
    }
    const result = await axios(options);
    return result;
  } catch (error) {
    return {
      ...error.response,
      error: true,
    };
  }
};

export default fetch;

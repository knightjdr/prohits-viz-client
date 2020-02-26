const defaultOptions = {
  data: {},
  headers: {},
  method: 'GET',
};

const fillOptions = (options) => {
  const fetchOptions = Object.entries(defaultOptions).reduce((accum, [key, value]) => ({
    ...accum,
    [key]: options[key] || value,
  }), {});

  if (fetchOptions.method === 'POST' && fetchOptions.data instanceof FormData) {
    fetchOptions.body = fetchOptions.data;
  } else if (fetchOptions.method === 'POST') {
    fetchOptions.body = JSON.stringify(fetchOptions.data);
    fetchOptions.headers['Content-Type'] = 'application/json';
  }
  delete fetchOptions.data;

  if (Object.keys(fetchOptions.headers).length === 0) {
    delete fetchOptions.headers;
  }

  return fetchOptions;
};

const fetchWrapper = async (route, options = {}, responseType = 'json') => {
  try {
    const url = `${process.env.REACT_APP_API}${route}`;
    const fetchOptions = fillOptions(options);
    const response = await fetch(url, fetchOptions);

    const [ok, data] = await Promise.all([response.ok, response[responseType]()]);

    if (!ok) {
      return {
        data,
        error: true,
        message: response.statusText,
      };
    }
    return { data };
  } catch (error) {
    return {
      error: true,
      message: error.toString(),
    };
  }
};

export default fetchWrapper;

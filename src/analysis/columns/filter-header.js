import convertToOptions from './convert-to-options';

const hasRecommendColumns = (recommended) => (
  recommended
  && Array.isArray(recommended)
  && recommended.length > 0
);

/* filters an array of header strings into two groups: suggested and other.
** The return object contains an array of options for a Select menu and
** an initial value for that menu if the header matches a string in the
** recommended arg. */

const filterHeader = (recommended, headers) => {
  if (!hasRecommendColumns(recommended)) {
    return {
      initialValue: '',
      options: convertToOptions([], [...headers]),
    };
  }

  let initialValue = '';
  const lowercaseHeader = headers.map((header) => (header.toLowerCase()));
  const suggestedOptions = [];
  const otherOptions = [];

  // Filter header for columns that are found in recommended array.
  recommended.forEach((suggestedHeader) => {
    const headerIndex = lowercaseHeader.indexOf(suggestedHeader);
    if (headerIndex > -1) {
      const headerValue = headers[headerIndex];
      suggestedOptions.push(headerValue);
      initialValue = initialValue || headerValue;
    }
  });

  // Add any header not in recommended array to other options.
  headers.forEach((header) => {
    if (!suggestedOptions.includes(header)) {
      otherOptions.push(header);
    }
  });

  return {
    initialValue,
    options: convertToOptions(suggestedOptions, otherOptions),
  };
};

export default filterHeader;

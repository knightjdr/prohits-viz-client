const parseOptions = (inputOtions) => {
  const MAX_HEIGHT = 350;
  const OPT_GROUP_HEIGHT = 30;
  const OPTION_HEIGHT = 35;

  let options = inputOtions;
  if (options && typeof options[0] === 'string') {
    options = options.map(option => ({ label: option, value: option }));
  }

  const selectableOptions = options.filter(option => !option.optGroup);
  const optGroupNumber = options.length - selectableOptions.length;
  const optionNumber = selectableOptions.length;
  const desiredHeight = (optGroupNumber * OPT_GROUP_HEIGHT) + (optionNumber * OPTION_HEIGHT);

  return {
    height: desiredHeight < MAX_HEIGHT ? desiredHeight : MAX_HEIGHT,
    optGroupNumber,
    optionHeight: OPTION_HEIGHT,
    options,
    optionNumber,
    selectableOptions,
  };
};

export default parseOptions;

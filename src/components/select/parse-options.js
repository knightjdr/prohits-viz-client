const MAX_HEIGHT = 350;
const OPT_GROUP_HEIGHT = 30;
const OPTION_HEIGHT = 35;

export const convertArrayElementsToObject = options => (
  options && typeof options[0] === 'string'
    ? options.map(option => ({ label: option, value: option }))
    : options
);

const parseOptions = (inputOtions) => {
  const options = convertArrayElementsToObject(inputOtions);

  const selectableOptions = options.filter(option => !option.optGroup);
  const numberOfOptGroups = options.length - selectableOptions.length;
  const numberOfOptions = selectableOptions.length;
  const desiredHeight = (numberOfOptGroups * OPT_GROUP_HEIGHT) + (numberOfOptions * OPTION_HEIGHT);

  return {
    height: desiredHeight < MAX_HEIGHT ? desiredHeight : MAX_HEIGHT,
    optionHeight: OPTION_HEIGHT,
    options,
    selectableOptions,
  };
};

export default parseOptions;

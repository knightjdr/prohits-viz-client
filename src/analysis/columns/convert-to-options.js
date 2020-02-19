import sort from '../../utils/sort';

const convertToOptions = (suggested, other) => {
  const options = [];
  if (suggested.length > 0) {
    const group = {
      label: 'Suggested',
      optGroup: true,
    };
    options.push(group);
    options.push(...suggested.map(option => ({ label: option, value: option })));
  }

  if (other.length > 0) {
    other.sort(sort.character);
    const group = {
      label: 'Other',
      optGroup: true,
    };
    options.push(group);
    options.push(...other.map(option => ({ label: option, value: option })));
  }
  return options;
};

export default convertToOptions;

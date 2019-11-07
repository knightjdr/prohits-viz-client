import copyToClipboard from '../../../../../../../../utils/copy-to-clipboard';

const copyOptions = (options) => {
  if (options.length > 0) {
    const arr = typeof options[0] === 'string'
      ? options
      : options.map(item => item.name);
    copyToClipboard(arr.join('\r\n'));
  }
};

export default copyOptions;

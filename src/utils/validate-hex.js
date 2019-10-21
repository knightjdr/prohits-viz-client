const validHex = (hex, defaultHex = '#000000') => {
  const regex = /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i;
  return regex.test(hex) ? hex : defaultHex;
};

export default validHex;

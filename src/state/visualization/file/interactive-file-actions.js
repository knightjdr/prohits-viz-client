export const CLEAR_INTERACTIVE_FILE = 'CLEAR_INTERACTIVE_FILE';
export const PARSE_INTERACTIVE_FILE = 'PARSE_INTERACTIVE_FILE';

export const clearFile = () => ({
  type: CLEAR_INTERACTIVE_FILE,
});

export const parseFile = file => ({
  file,
  type: PARSE_INTERACTIVE_FILE,
});

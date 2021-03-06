module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'jsx-a11y/label-has-for': [0],
    'jsx-a11y/label-has-associated-control': [2],
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'no-underscore-dangle': ['error', { allow: ['__REDUX_DEVTOOLS_EXTENSION__'] }],
    'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 10, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 10, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
  },
};

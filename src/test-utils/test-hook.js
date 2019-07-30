import React from 'react';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';

export { act };

const TestHook = ({ callback }) => {
  callback();
  return null;
};

export const renderHook = (callback) => {
  render(<TestHook callback={callback} />);
};

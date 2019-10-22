import React from 'react';
import { render } from '@testing-library/react';

import Button from './button';

const theme = {
  fontDark: '#111',
};

describe('Rectangular button style', () => {
  let container;

  beforeAll(() => {
    ({ container } = render(<Button theme={theme} />));
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('should set color on focus', () => {
    const modifier = {
      modifier: '&:focus:not([disabled])',
    };
    expect(container.firstChild).toHaveStyleRule('color', theme.fontDark, modifier);
  });

  it('should set color on hover', () => {
    const modifier = {
      modifier: '&:hover:not([disabled])',
    };
    expect(container.firstChild).toHaveStyleRule('color', theme.fontDark, modifier);
  });
});

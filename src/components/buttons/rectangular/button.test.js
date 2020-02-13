import React from 'react';
import { render } from '@testing-library/react';

import Button from './button';

const theme = {
  fontDark: '#111',
};

const renderElement = props => render(<Button {...props} />);

describe('Rectangular button style', () => {
  const props = { theme };

  it('should match snapshot', () => {
    const { container } = renderElement(props);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should set color on focus', () => {
    const { container } = renderElement(props);
    const modifier = {
      modifier: '&:focus:not([disabled])',
    };
    expect(container.firstChild).toHaveStyleRule('color', theme.fontDark, modifier);
  });

  it('should set color on hover', () => {
    const { container } = renderElement(props);
    const modifier = {
      modifier: '&:hover:not([disabled])',
    };
    expect(container.firstChild).toHaveStyleRule('color', theme.fontDark, modifier);
  });
});

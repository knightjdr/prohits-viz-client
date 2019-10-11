import React from 'react';
import { render } from '@testing-library/react';

import Button from './button-defaults';

const theme = {
  fontStackSystem: 'arial',
  timingFunction: 'ease-in',
};

describe('Default button style', () => {
  describe('default', () => {
    let container;

    beforeAll(() => {
      ({ container } = render(<Button theme={theme} />));
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });

    it('should set transition timing function', () => {
      expect(container.firstChild).toHaveStyleRule('transition-timing-function', theme.timingFunction);
    });

    it('should set animation timing function on active', () => {
      const modifier = {
        modifier: '&:active',
      };
      expect(container.firstChild).toHaveStyleRule('animation-timing-function', theme.timingFunction, modifier);
    });
  });

  describe('default with optional props', () => {
    let container;

    beforeAll(() => {
      ({ container } = render(
        <Button
          disabled
          shadow
          theme={theme}
        />,
      ));
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });

    it('should set box-shadow', () => {
      expect(container.firstChild).toHaveStyleRule('box-shadow', '0 2px 5px 0 rgba(0,0,0,0.26)');
    });

    it('should set cursor', () => {
      expect(container.firstChild).toHaveStyleRule('cursor', 'not-allowed');
    });

    it('should set opacity', () => {
      expect(container.firstChild).toHaveStyleRule('opacity', '0.6');
    });
  });
});

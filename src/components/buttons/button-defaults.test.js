import React from 'react';
import { render } from '@testing-library/react';

import Button from './button-defaults';

const theme = {
  fontLight: '#fff',
  fontStackSystem: 'Arial',
  colorPrimary1: '#0000ff',
  colorSecondary1: '#00ffff',
  success: '#00ff00',
  timingFunction: 'ease-in',
  warning: '#ff0000',
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

  describe('optional props', () => {
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

  describe('grey button', () => {
    let container;

    beforeAll(() => {
      ({ container } = render(
        <Button
          kind="grey"
          theme={theme}
        />,
      ));
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });

    it('should set background color', () => {
      expect(container.firstChild).toHaveStyleRule('background-color', 'rgba(0,0,0,0.2)');
    });

    it('should set color', () => {
      expect(container.firstChild).toHaveStyleRule('color', theme.fontDark);
    });
  });

  describe('primary', () => {
    let container;

    beforeAll(() => {
      ({ container } = render(
        <Button
          kind="primary"
          theme={theme}
        />,
      ));
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });

    it('should set background color', () => {
      expect(container.firstChild).toHaveStyleRule('background-color', theme.colorPrimary1);
    });

    it('should set color', () => {
      expect(container.firstChild).toHaveStyleRule('color', theme.fontLight);
    });

    it('should set background color on focus', () => {
      const modifier = {
        modifier: '&:focus:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('background-color', '#fff', modifier);
    });

    it('should set border color on focus', () => {
      const modifier = {
        modifier: '&:focus:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('border-color', theme.colorPrimary1, modifier);
    });

    it('should set color on focus', () => {
      const modifier = {
        modifier: '&:focus:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('color', theme.colorPrimary1, modifier);
    });
  });

  describe('secondary', () => {
    let container;

    beforeAll(() => {
      ({ container } = render(
        <Button
          kind="secondary"
          theme={theme}
        />,
      ));
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });

    it('should set background color', () => {
      expect(container.firstChild).toHaveStyleRule('background-color', theme.colorSecondary1);
    });

    it('should set color', () => {
      expect(container.firstChild).toHaveStyleRule('color', theme.fontLight);
    });

    it('should set background color on focus', () => {
      const modifier = {
        modifier: '&:focus:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('background-color', '#fff', modifier);
    });

    it('should set border color on focus', () => {
      const modifier = {
        modifier: '&:focus:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('border-color', theme.colorSecondary1, modifier);
    });

    it('should set color on focus', () => {
      const modifier = {
        modifier: '&:focus:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('color', theme.colorSecondary1, modifier);
    });
  });

  describe('success', () => {
    let container;

    beforeAll(() => {
      ({ container } = render(
        <Button
          kind="success"
          theme={theme}
        />,
      ));
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });

    it('should set background color', () => {
      expect(container.firstChild).toHaveStyleRule('background-color', theme.success);
    });

    it('should set background color on focus', () => {
      const modifier = {
        modifier: '&:focus:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('background-color', '#fff', modifier);
    });

    it('should set border color on focus', () => {
      const modifier = {
        modifier: '&:focus:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('border-color', theme.success, modifier);
    });
  });

  describe('warning', () => {
    let container;

    beforeAll(() => {
      ({ container } = render(
        <Button
          kind="warning"
          theme={theme}
        />,
      ));
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });

    it('should set background color', () => {
      expect(container.firstChild).toHaveStyleRule('background-color', theme.warning);
    });

    it('should set background color on focus', () => {
      const modifier = {
        modifier: '&:focus:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('background-color', '#fff', modifier);
    });

    it('should set border color on focus', () => {
      const modifier = {
        modifier: '&:focus:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('border-color', theme.warning, modifier);
    });

    it('should set color on focus', () => {
      const modifier = {
        modifier: '&:focus:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('color', theme.warning, modifier);
    });
  });
});

import React from 'react';
import { render } from '@testing-library/react';

import Button from './button';

const theme = {
  colorPrimary1: '#0000ff',
  colorSecondary1: '#000088',
  fontLight: '#fff',
  fontDark: '#111',
  success: '#0f0',
  warning1: '#ee000',
};

describe('Rectangular button style', () => {
  describe('default', () => {
    let container;

    beforeAll(() => {
      ({ container } = render(<Button theme={theme} />));
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });
  });

  describe('grey', () => {
    let container;

    beforeAll(() => {
      ({ container } = render(
        <Button
          kind="grey"
          theme={theme}
        />,
      ));
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
      expect(container.firstChild).toHaveStyleRule('color', theme.fontDark, modifier);
    });

    it('should set border color on hover', () => {
      const modifier = {
        modifier: '&:hover:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('border-color', theme.colorPrimary1, modifier);
    });

    it('should set color on hover', () => {
      const modifier = {
        modifier: '&:hover:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('color', theme.fontDark, modifier);
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
      expect(container.firstChild).toHaveStyleRule('color', theme.fontDark, modifier);
    });

    it('should set border color on hover', () => {
      const modifier = {
        modifier: '&:hover:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('border-color', theme.colorSecondary1, modifier);
    });

    it('should set color on hover', () => {
      const modifier = {
        modifier: '&:hover:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('color', theme.fontDark, modifier);
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

    it('should set border color on focus', () => {
      const modifier = {
        modifier: '&:focus:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('border-color', theme.success, modifier);
    });

    it('should set border color on hover', () => {
      const modifier = {
        modifier: '&:hover:not([disabled])',
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
      expect(container.firstChild).toHaveStyleRule('background-color', theme.warning1);
    });

    it('should set border color on focus', () => {
      const modifier = {
        modifier: '&:focus:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('border-color', theme.warning1, modifier);
    });

    it('should set border color on hover', () => {
      const modifier = {
        modifier: '&:hover:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('border-color', theme.warning1, modifier);
    });
  });
});

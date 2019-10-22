import React from 'react';
import { render } from '@testing-library/react';

import Button from './button-style';

const theme = {
  colorPrimary1: '#0000ff',
  colorSecondary1: '#00ff00',
  fontLight: '#fff',
  fontDark: '#111',
  warning1: '#ee000',
  warning2: '#ff000',
};

describe('Icon button style', () => {
  describe('default', () => {
    let container;

    beforeAll(() => {
      ({ container } = render(<Button theme={theme} />));
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
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

    it('should set icon background color on focus', () => {
      const modifier = {
        modifier: '&:focus:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('background-color', theme.accentPrimary1, modifier);
    });

    it('should set icon color on focus', () => {
      const modifier = {
        modifier: '&:focus:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('color', theme.colorPrimary1, modifier);
    });

    it('should set icon background color on hover', () => {
      const modifier = {
        modifier: '&:hover:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('background-color', theme.accentPrimary1, modifier);
    });

    it('should set icon color on hover', () => {
      const modifier = {
        modifier: '&:hover:not([disabled])',
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

    it('should set filter on focus', () => {
      const modifier = {
        modifier: '&:focus:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('filter', 'contrast(200%)', modifier);
    });

    it('should set filter on hover', () => {
      const modifier = {
        modifier: '&:hover:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('filter', 'contrast(200%)', modifier);
    });
  });

  describe('transparent', () => {
    let container;

    beforeAll(() => {
      ({ container } = render(<Button theme={theme} />));
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });

    it('should set background color', () => {
      expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
    });

    it('should set color', () => {
      expect(container.firstChild).toHaveStyleRule('color', theme.colorPrimary1);
    });

    it('should set before background color', () => {
      const modifier = {
        modifier: '&::before',
      };
      expect(container.firstChild).toHaveStyleRule('background-color', theme.colorPrimary1, modifier);
    });

    it('should set icon color on focus', () => {
      const modifier = {
        modifier: '&:focus:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('color', theme.fontLight, modifier);
    });

    it('should set icon color on hover', () => {
      const modifier = {
        modifier: '&:hover:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('color', theme.fontLight, modifier);
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
      expect(container.firstChild).toHaveStyleRule('background-color', theme.warning2);
    });

    it('should set color', () => {
      expect(container.firstChild).toHaveStyleRule('color', theme.fontDark);
    });

    it('should set icon background color on focus', () => {
      const modifier = {
        modifier: '&:focus:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('background-color', theme.warning1, modifier);
    });

    it('should set icon color on focus', () => {
      const modifier = {
        modifier: '&:focus:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('color', theme.fontLight, modifier);
    });

    it('should set icon background color on hover', () => {
      const modifier = {
        modifier: '&:hover:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('background-color', theme.warning1, modifier);
    });

    it('should set icon color on hover', () => {
      const modifier = {
        modifier: '&:hover:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('color', theme.fontLight, modifier);
    });
  });
});

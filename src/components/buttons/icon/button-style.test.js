import React from 'react';
import { render } from '@testing-library/react';

import Button from './button-style';

const theme = {
  colorPrimary1: '#0000ff',
  fontLight: '#fff',
};

const renderElement = (props) => render(<Button {...props} />);

describe('Icon button style', () => {
  describe('default', () => {
    const props = { theme };

    it('should match snapshot', () => {
      const { container } = renderElement(props);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('transparent', () => {
    const props = { theme };

    it('should match snapshot', () => {
      const { container } = renderElement(props);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('should set background color', () => {
      const { container } = renderElement(props);
      expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
    });

    it('should set color', () => {
      const { container } = renderElement(props);
      expect(container.firstChild).toHaveStyleRule('color', theme.colorPrimary1);
    });

    it('should set before background color', () => {
      const { container } = renderElement(props);
      const modifier = {
        modifier: '&::before',
      };
      expect(container.firstChild).toHaveStyleRule('background-color', theme.colorPrimary1, modifier);
    });

    it('should set icon color on focus', () => {
      const { container } = renderElement(props);
      const modifier = {
        modifier: '&:focus:not([disabled])',
      };
      expect(container.firstChild).toHaveStyleRule('color', theme.fontLight, modifier);
    });
  });

  describe('square', () => {
    const props = {
      theme,
      square: true,
    };

    it('should match snapshot', () => {
      const { container } = renderElement(props);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('should set border-radius', () => {
      const { container } = renderElement(props);
      expect(container.firstChild).toHaveStyleRule('border-radius', '0');
    });

    it('should set before border-radius', () => {
      const { container } = renderElement(props);
      const modifier = {
        modifier: '&::before',
      };
      expect(container.firstChild).toHaveStyleRule('border-radius', '0', modifier);
    });
  });
});

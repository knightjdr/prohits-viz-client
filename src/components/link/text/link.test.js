import React from 'react';
import { render } from '@testing-library/react';

import Link from './link';

jest.mock('react-router-dom', () => ({
  Link: (props) => <div {...props} />,
}));

const renderElement = (props) => render(<Link {...props} />);

describe('Link style', () => {
  describe('with style for :visited', () => {
    const props = { to: '/' };

    it('should match snapshot', () => {
      const { container } = renderElement(props);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('should set :visited color', () => {
      const { container } = renderElement(props);
      const modifier = {
        modifier: '&:visited',
      };
      expect(container.firstChild).toHaveStyleRule('color', '#673ab7', modifier);
    });
  });

  describe('show outline on :focus', () => {
    const props = {
      to: '/',
      outline: true,
    };

    it('should add outline on focus', () => {
      const { container } = renderElement(props);
      const modifier = {
        modifier: '&:focus',
      };
      expect(container.firstChild).toHaveStyleRule('outline', 'auto', modifier);
    });

    it('should set outline properties on focus', () => {
      const { container } = renderElement(props);
      const modifier = {
        modifier: '&:focus',
      };
      expect(container.firstChild).toHaveStyleRule('outline-color', '#4D90FE', modifier);
    });
  });

  describe('with no style for :visited', () => {
    const props = {
      to: '/',
      visited: false,
    };

    it('should match snapshot', () => {
      const { container } = renderElement(props);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('should unset :visited color', () => {
      const { container } = renderElement(props);
      const modifier = {
        modifier: '&:visited',
      };
      expect(container.firstChild).toHaveStyleRule('color', '#2468e5', modifier);
    });
  });

  describe('no outline on :focus', () => {
    const props = {
      to: '/',
      outline: false,
    };

    it('should add outline on focus', () => {
      const { container } = renderElement(props);
      const modifier = {
        modifier: '&:focus',
      };
      expect(container.firstChild).toHaveStyleRule('outline', 'none', modifier);
    });

    it('should set outline properties on focus', () => {
      const { container } = renderElement(props);
      const modifier = {
        modifier: '&:focus',
      };
      expect(container.firstChild).toHaveStyleRule('outline-color', undefined, modifier);
    });
  });
});

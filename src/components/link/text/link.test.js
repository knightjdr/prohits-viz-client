import React from 'react';
import { render } from '@testing-library/react';

import Link from './link';

describe('Link style', () => {
  describe('with style for :visited', () => {
    let container;

    beforeAll(() => {
      ({ container } = render(<Link href="/" />));
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });

    it('should set :visited color', () => {
      const modifier = {
        modifier: '&:visited',
      };
      expect(container.firstChild).toHaveStyleRule('color', '#1E6C60', modifier);
    });
  });

  describe('show outline on :focus', () => {
    let container;

    beforeAll(() => {
      ({ container } = render(<Link href="/" />));
    });

    it('should add outline on focus', () => {
      const modifier = {
        modifier: '&:focus',
      };
      expect(container.firstChild).toHaveStyleRule('outline', 'auto', modifier);
    });

    it('should set outline properties on focus', () => {
      const modifier = {
        modifier: '&:focus',
      };
      expect(container.firstChild).toHaveStyleRule('outline-color', '#4D90FE', modifier);
    });
  });

  describe('with no style for :visited', () => {
    let container;

    beforeAll(() => {
      ({ container } = render(
        <Link
          href="/"
          visited={false}
        />,
      ));
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });

    it('should unset :visited color', () => {
      const modifier = {
        modifier: '&:visited',
      };
      expect(container.firstChild).toHaveStyleRule('color', '#2468e5', modifier);
    });
  });

  describe('no outline on :focus', () => {
    let container;

    beforeAll(() => {
      ({ container } = render(
        <Link
          href="/"
          outline={false}
        />,
      ));
    });

    it('should add outline on focus', () => {
      const modifier = {
        modifier: '&:focus',
      };
      expect(container.firstChild).toHaveStyleRule('outline', 'none', modifier);
    });

    it('should set outline properties on focus', () => {
      const modifier = {
        modifier: '&:focus',
      };
      expect(container.firstChild).toHaveStyleRule('outline-color', undefined, modifier);
    });
  });
});

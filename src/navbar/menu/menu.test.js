import React from 'react';
import { cleanup, render } from '@testing-library/react';

import Menu from './menu';

const toggleMenu = jest.fn();

describe('Navbar menu', () => {
  describe('closed', () => {
    let container;
    let getByLabelText;

    afterAll(() => {
      cleanup();
    });

    beforeAll(() => {
      const links = ['analysis', 'help'];
      ({ container, getByLabelText } = render(
        <Menu
          links={links}
          open={false}
          route="home"
          toggleMenu={toggleMenu}
        />,
      ));
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });

    it('should toggle menu on button click', () => {
      toggleMenu.mockClear();
      getByLabelText('navigation menu').click();
      expect(toggleMenu).toHaveBeenCalled();
    });
  });

  describe('open', () => {
    let container;
    let getByText;

    afterAll(() => {
      cleanup();
    });

    beforeAll(() => {
      const links = ['analysis', 'help'];
      ({ container, getByText } = render(
        <Menu
          links={links}
          open
          route="home"
          toggleMenu={toggleMenu}
        />,
      ));
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });

    it('should render analysis link', () => {
      expect(getByText(/analysis/i)).toBeInTheDocument();
    });

    it('should render help link', () => {
      expect(getByText(/help/i)).toBeInTheDocument();
    });
  });
});

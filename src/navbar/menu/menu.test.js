import React from 'react';
import { render } from '@testing-library/react';

import Menu from './menu';

jest.mock('./menu-style');

const toggleMenu = jest.fn();

const renderElement = (props) => render(<Menu {...props} />);

describe('Navbar menu', () => {
  describe('closed', () => {
    const props = {
      links: ['analysis', 'help'],
      open: false,
      route: 'home',
      toggleMenu,
    };

    it('should match snapshot', () => {
      const { container } = renderElement(props);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('should toggle menu on button click', () => {
      const { getByLabelText } = renderElement(props);
      toggleMenu.mockClear();
      getByLabelText('navigation menu').click();
      expect(toggleMenu).toHaveBeenCalled();
    });
  });

  describe('open', () => {
    const props = {
      links: ['analysis', 'help'],
      open: true,
      route: 'home',
      toggleMenu,
    };

    it('should match snapshot', () => {
      const { container } = renderElement(props);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('should render analysis link', () => {
      const { getByText } = renderElement(props);
      expect(getByText(/analysis/i)).toBeInTheDocument();
    });

    it('should render help link', () => {
      const { getByText } = renderElement(props);
      expect(getByText(/help/i)).toBeInTheDocument();
    });
  });
});

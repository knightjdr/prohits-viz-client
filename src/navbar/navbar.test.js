import React from 'react';
import { render } from '@testing-library/react';

import Navbar from './navbar';

jest.mock('./navbar-style');
jest.mock('../components/link/text/link');
jest.mock('./menu/menu-style');
jest.mock('./text-links/text-links-style');

const renderElement = props => render(<Navbar {...props} />);

describe('Navbar', () => {
  describe('normal screen size', () => {
    const props = {
      smallScreen: false,
      route: 'home',
      uri: undefined,
    };

    it('should match snapshot', () => {
      const { container } = renderElement(props);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('small screen size', () => {
    const props = {
      smallScreen: true,
      route: 'home',
      uri: undefined,
    };

    it('should match snapshot', () => {
      const { container } = renderElement(props);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('should render hamburger menu', () => {
      const { getByLabelText } = renderElement(props);
      expect(getByLabelText('navigation menu')).toBeInTheDocument();
    });
  });
});

import React from 'react';
import { cleanup, render } from '@testing-library/react';

import Navbar from './navbar';

jest.mock('../components/link/text/link');

describe('Navbar', () => {
  describe('normal screen size', () => {
    let container;

    afterAll(() => {
      cleanup();
    });

    beforeAll(() => {
      ({ container } = render(
        <Navbar
          smallScreen={false}
          route="home"
          uri={undefined}
        />,
      ));
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });
  });

  describe('small screen size', () => {
    let container;
    let getByLabelText;

    afterAll(() => {
      cleanup();
    });

    beforeAll(() => {
      ({ container, getByLabelText } = render(
        <Navbar
          smallScreen
          route="home"
          uri={undefined}
        />,
      ));
    });

    it('should match snapshot', () => {
      expect(container).toMatchSnapshot();
    });

    it('should render hamburger menu', () => {
      expect(getByLabelText('navigation menu')).toBeInTheDocument();
    });
  });
});

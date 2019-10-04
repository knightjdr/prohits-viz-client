import React from 'react';
import { cleanup, render } from '@testing-library/react';

import TextLinks from './text-links';

jest.mock('./text-links-style');

describe('Navbar text links', () => {
  let container;
  let getByText;

  afterAll(() => {
    cleanup();
  });

  beforeAll(() => {
    const links = ['analysis', 'help'];
    const route = 'analysis';
    ({ container, getByText } = render(
      <TextLinks
        links={links}
        route={route}
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

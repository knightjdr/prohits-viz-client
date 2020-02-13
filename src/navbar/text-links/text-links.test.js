import React from 'react';
import { render } from '@testing-library/react';

import TextLinks from './text-links';

jest.mock('./text-links-style');

const renderElement = props => render(<TextLinks {...props} />);

describe('Navbar text links', () => {
  const props = {
    links: ['analysis', 'help'],
    route: 'analysis',
  };

  it('should match snapshot', () => {
    const { container } = renderElement(props);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render links', () => {
    const { getByText } = renderElement(props);
    expect(getByText(/analysis/i)).toBeInTheDocument();
    expect(getByText(/help/i)).toBeInTheDocument();
  });
});

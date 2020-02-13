import React from 'react';
import { render } from '@testing-library/react';
import { faPlus } from '@fortawesome/pro-solid-svg-icons';

import Button from './button';

const onClick = jest.fn();

const theme = {
  colorPrimary1: '#00f',
  fontLight: '#fff',
  timingFunction: 'ease',
};

const renderElement = props => render(<Button {...props} />);

describe('Icon button', () => {
  describe('style', () => {
    describe('primary button', () => {
      const props = {
        'aria-label': 'test-button',
        fill: 'primary',
        onClick,
        icon: faPlus,
        theme,
        type: 'button',
      };

      it('should match snapshot', () => {
        const { container } = renderElement(props);
        expect(container.firstChild).toMatchSnapshot();
      });
    });

    describe('transparent (default) button', () => {
      const props = {
        'aria-label': 'test-button',
        onClick,
        icon: faPlus,
        theme,
        type: 'button',
      };

      it('should match snapshot', () => {
        const { container } = renderElement(props);
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });
});

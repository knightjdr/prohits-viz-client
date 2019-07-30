import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { faPlus } from '@fortawesome/pro-solid-svg-icons';

import Button from './button';

const onClick = jest.fn();

const theme = {
  colorPrimary1: '#00f',
  fontLight: '#fff',
  timingFunction: 'ease',
};

describe('Icon button', () => {
  describe('style', () => {
    describe('primary button', () => {
      let container;

      afterAll(() => {
        cleanup();
      });

      beforeAll(() => {
        ({ container } = render(
          <Button
            aria-label="test-button"
            fill="primary"
            onClick={onClick}
            icon={faPlus}
            theme={theme}
            type="button"
          />,
        ));
      });

      it('should match snapshot', () => {
        expect(container).toMatchSnapshot();
      });
    });

    describe('transparent (default) button', () => {
      let container;

      afterAll(() => {
        cleanup();
      });

      beforeAll(() => {
        ({ container } = render(
          <Button
            aria-label="test-button"
            onClick={onClick}
            icon={faPlus}
            theme={theme}
            type="button"
          />,
        ));
      });

      it('should match snapshot', () => {
        expect(container).toMatchSnapshot();
      });
    });
  });
});

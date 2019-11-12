import React from 'react';

import createTooltipProperties from './create-tooltip-properties';

jest.mock('../calculate-cursor-position', () => () => ({
  clientX: 100,
  clientY: 50,
  x: 10,
  y: 20,
}));

describe('Create tooltip properties', () => {
  it('should return object with tooltip information', () => {
    const options = {
      cellSize: 15,
      columnOrder: [0, 1],
      pagePosition: {
        x: 0,
        y: 0,
      },
      rowDB: [
        { data: [{ value: 10 }, { value: 5 }] },
      ],
      rowOrder: [0],
    };

    const expected = {
      open: true,
      text: [<div key="value" style={{ margin: '2px 0' }}>value: 10</div>],
      position: {
        x: 110,
        y: 50,
      },
    };
    expect(createTooltipProperties({}, options)).toEqual(expected);
  });
});

/* eslint-disable object-curly-newline */
import fillCircles, { defaultState } from './circles';

const plots = [
  {
    readouts: [
      {
        segments: { attribute1: 1, attribute2: 2, attribute3: 3 },
      },
    ],
  },
];

const defaultCircleOrder = [
  { color: 'blue', filter: 0, max: 50, min: 0, attribute: 'attribute1' },
  { color: 'blue', filter: 0, max: 50, min: 0, attribute: 'attribute2' },
  { color: 'blue', filter: 0, max: 50, min: 0, attribute: 'attribute3' },
];

describe('Fill circles', () => {
  it('should return user-defined circles when valid', () => {
    const userCircles = {
      main: {
        defaultOrder: defaultCircleOrder,
        hidden: [{ color: 'blue', filter: 0, max: 50, min: 0, attribute: 'attribute4' }],
        order: defaultCircleOrder,
      },
    };
    const expected = {
      main: {
        ...defaultState,
        ...userCircles.main,
      },
    };
    expect(fillCircles(userCircles, plots)).toEqual(expected);
  });

  it('should return user-defined circles when missing parameters', () => {
    const userCircles = {
      main: {
        defaultOrder: [
          { color: 'blue', max: 50, min: 0, attribute: 'attribute1' },
          { color: 'blue', max: 50, min: 0, attribute: 'attribute2' },
          { color: 'blue', max: 50, min: 0, attribute: 'attribute3' },
        ],
        hidden: [{ color: 'blue', filter: 0, max: 50, min: 0, attribute: 'attribute4' }],
        order: [
          { color: 'blue', max: 50, min: 0, attribute: 'attribute1' },
          { color: 'blue', max: 50, min: 0, attribute: 'attribute2' },
          { color: 'blue', max: 50, min: 0, attribute: 'attribute3' },
        ],
      },
    };
    const expected = {
      main: {
        ...defaultState,
        defaultOrder: [
          { color: 'blue', filter: 0, max: 50, min: 0, attribute: 'attribute1' },
          { color: 'blue', filter: 0, max: 50, min: 0, attribute: 'attribute2' },
          { color: 'blue', filter: 0, max: 50, min: 0, attribute: 'attribute3' },
        ],
        hidden: [{ color: 'blue', filter: 0, max: 50, min: 0, attribute: 'attribute4' }],
        order: [
          { color: 'blue', filter: 0, max: 50, min: 0, attribute: 'attribute1' },
          { color: 'blue', filter: 0, max: 50, min: 0, attribute: 'attribute2' },
          { color: 'blue', filter: 0, max: 50, min: 0, attribute: 'attribute3' },
        ],
      },
    };
    expect(fillCircles(userCircles, plots)).toEqual(expected);
  });

  it('should return user-defined circles when valid but without snapshot identifiers', () => {
    const userCircles = {
      defaultOrder: defaultCircleOrder,
      hidden: [{ color: 'blue', filter: 0, max: 50, min: 0, attribute: 'attribute4' }],
      order: defaultCircleOrder,
    };
    const expected = {
      main: userCircles,
    };
    expect(fillCircles(userCircles, plots)).toEqual(expected);
  });

  it('should return user-defined circles without snapshot identifiers when missing parameters', () => {
    const userCircles = {
      order: [
        { color: 'blue', max: 50, min: 0, attribute: 'attribute1' },
        { color: 'blue', max: 50, min: 0, attribute: 'attribute2' },
        { color: 'blue', max: 50, min: 0, attribute: 'attribute3' },
      ],
    };
    const expected = {
      main: {
        ...defaultState,
        defaultOrder: [
          { color: 'blue', filter: 0, max: 50, min: 0, attribute: 'attribute1' },
          { color: 'blue', filter: 0, max: 50, min: 0, attribute: 'attribute2' },
          { color: 'blue', filter: 0, max: 50, min: 0, attribute: 'attribute3' },
        ],
        hidden: [],
        order: [
          { color: 'blue', filter: 0, max: 50, min: 0, attribute: 'attribute1' },
          { color: 'blue', filter: 0, max: 50, min: 0, attribute: 'attribute2' },
          { color: 'blue', filter: 0, max: 50, min: 0, attribute: 'attribute3' },
        ],
      },
    };
    expect(fillCircles(userCircles, plots)).toEqual(expected);
  });

  it('should return defaults when user-defined circles options invalid', () => {
    const userLabels = {
      main: {
        defaultOrder: { attribute1: true, attribute2: true, attribute3: true },
        hidden: { attribute4: true },
        order: { attribute2: true, attribute1: true, attribute3: true },
      },
    };
    const expected = {
      main: {
        ...defaultState,
        defaultOrder: defaultCircleOrder,
        order: defaultCircleOrder,
      },
    };
    expect(fillCircles(userLabels, plots)).toEqual(expected);
  });

  it('should return defaults when no properties are defined', () => {
    const userCircles = {};
    const expected = {
      main: {
        ...defaultState,
        defaultOrder: defaultCircleOrder,
        order: defaultCircleOrder,
      },
    };
    expect(fillCircles(userCircles, plots)).toEqual(expected);
  });

  it('should return defaults when user-defined circles is not an object', () => {
    const userCircles = [];
    const expected = {
      main: {
        ...defaultState,
        defaultOrder: defaultCircleOrder,
        order: defaultCircleOrder,
      },
    };
    expect(fillCircles(userCircles, plots)).toEqual(expected);
  });

  it('should return defaults when user-defined circles undefined', () => {
    const expected = {
      main: {
        ...defaultState,
        defaultOrder: defaultCircleOrder,
        order: defaultCircleOrder,
      },
    };
    expect(fillCircles(undefined, plots)).toEqual(expected);
  });
});

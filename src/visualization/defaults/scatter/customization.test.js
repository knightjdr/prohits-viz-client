import fillCustomization, { defaultState } from './customization';

describe('Fill customization', () => {
  it('should return user-defined customization when valid', () => {
    const userCustomization = {
      main: {
        color: '#ff0000',
        groups: [
          {
            color: '#ff0000',
            label: 'custom group 1',
            points: ['a', 'd'],
            radius: 5,
          },
        ],
        id: 2,
        label: 'my custom label',
        radius: 5,
      },
    };
    const expected = {
      main: {
        ...defaultState,
        ...userCustomization.main,
      },
    };
    expect(fillCustomization(userCustomization)).toEqual(expected);
  });

  it('should return defaults when user-defined values are invalid', () => {
    const userCustomization = {
      main: {
        color: 'fff',
        groups: {},
        id: '1',
        label: 1,
        radius: 'four',
      },
    };
    const expected = {
      main: {
        ...defaultState,
      },
    };
    expect(fillCustomization(userCustomization)).toEqual(expected);
  });

  it('should return user-defined customization when valid but without snapshot identifiers', () => {
    const userCustomization = {
      color: '#ff0000',
      groups: [
        {
          color: '#ff0000',
          label: 'custom group 1',
          points: ['a', 'd'],
          radius: 5,
        },
      ],
      id: 2,
      label: 'my custom label',
      radius: 5,
    };
    const expected = {
      main: userCustomization,
    };
    expect(fillCustomization(userCustomization)).toEqual(expected);
  });

  it('should return defaults when no properties are defined', () => {
    const userCustomization = {};
    const expected = {
      main: defaultState,
    };
    expect(fillCustomization(userCustomization)).toEqual(expected);
  });

  it('should return defaults when user-defined customizations is not an object', () => {
    const userCustomization = [];
    const expected = {
      main: defaultState,
    };
    expect(fillCustomization(userCustomization)).toEqual(expected);
  });

  it('should return defaults when user-defined customizations undefined', () => {
    const expected = {
      main: defaultState,
    };
    expect(fillCustomization(undefined)).toEqual(expected);
  });
});

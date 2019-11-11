import copyProperties, { copyField } from './copy-properties';

describe('Copy types for snapshot', () => {
  describe('array value', () => {
    let result;
    const value = [1, 2, 3];

    beforeAll(() => {
      result = copyField(value);
    });

    it('should create copy of array', () => {
      expect(result).toEqual(value);
    });

    it('should create new copy of array', () => {
      value.push(4);
      expect(result).not.toEqual(value);
    });
  });

  describe('object value', () => {
    let result;
    const value = { a: 1, b: 2, c: 3 };

    beforeAll(() => {
      result = copyField(value);
    });

    it('should create copy of array', () => {
      expect(result).toEqual(value);
    });

    it('should create new copy of array', () => {
      value.d = 4;
      expect(result).not.toEqual(value);
    });
  });

  it('should copy boolean', () => {
    const value = true;
    expect(value).toBe(value);
  });

  it('should copy integer', () => {
    const value = 1;
    expect(value).toBe(value);
  });

  it('should copy string', () => {
    const value = 'a';
    expect(value).toBe(value);
  });
});

describe('Copy state for snapshot', () => {
  it('should copy required fields from state', () => {
    const propertiesToCopy = {
      annotations: ['color', 'fontSize', 'show'],
      display: ['showTooltips'],
      markers: ['color', 'record', 'show'],
      settings: ['current', 'default'],
    };
    const currentState = {
      annotations: {
        color: '#00ff00',
        fontSize: 20,
        show: false,
      },
      display: {
        plotFixed: false,
        showTooltips: true,
      },
      markers: {
        color: '#000000',
        list: {},
        record: true,
        show: true,
      },
      settings: {
        current: {
          fillColor: 'red',
        },
        default: {
          fillColor: 'blue',
        },
      },
    };
    const expected = {
      annotations: {
        color: '#00ff00',
        fontSize: 20,
        show: false,
      },
      display: {
        showTooltips: true,
      },
      markers: {
        color: '#000000',
        record: true,
        show: true,
      },
      settings: {
        current: {
          fillColor: 'red',
        },
        default: {
          fillColor: 'blue',
        },
      },
    };
    expect(copyProperties(currentState, propertiesToCopy)).toEqual(expected);
  });
});

import {
  defineMatrices,
  defineMatrix,
  getDelta,
  getMouseStart,
  getPanOrigin,
  getScale,
  getWheelOrigin,
  getWheelPosition,
} from './utils';

describe('Scatter plot transform utils', () => {
  it('should return mouse event delta', () => {
    const e = {
      pageX: 100,
      pageY: 200,
    };
    const start = {
      x: 75,
      y: 25,
    };

    const expected = {
      x: 25,
      y: 175,
    };
    expect(getDelta(e, start)).toEqual(expected);
  });

  it('should define matrix transformation', () => {
    const scale = 2.5;
    const x = 100;
    const y = 150;

    const expected = 'matrix(2.5, 0, 0, 2.5, 100, 150)';
    expect(defineMatrix(scale, x, y)).toBe(expected);
  });

  it('should define matrix transformation for plot and axes', () => {
    const scale = 2.5;
    const x = 100;
    const y = 150;

    const expected = {
      plot: 'matrix(2.5, 0, 0, 2.5, 100, 150)',
      xAxis: 'matrix(2.5, 0, 0, 2.5, 100, 0)',
      yAxis: 'matrix(2.5, 0, 0, 2.5, 0, 150)',
    };
    expect(defineMatrices(scale, x, y)).toEqual(expected);
  });

  describe('mouse starting position', () => {
    it('should get starting position for x vertex', () => {
      const e = { pageY: 150 };
      const start = { x: 100, y: 200 };
      const vertex = 'x';

      const expected = { x: 100, y: 150 };
      expect(getMouseStart(e, start, vertex)).toEqual(expected);
    });

    it('should get starting position for y vertex', () => {
      const e = { pageX: 150 };
      const start = { x: 100, y: 200 };
      const vertex = 'y';

      const expected = { x: 150, y: 200 };
      expect(getMouseStart(e, start, vertex)).toEqual(expected);
    });

    it('should get starting position for plot vertex', () => {
      const e = { };
      const start = { x: 100, y: 200 };
      const vertex = '';

      const expected = { x: 100, y: 200 };
      expect(getMouseStart(e, start, vertex)).toEqual(expected);
    });
  });

  it('should get pan origin', () => {
    const e = { pageX: 150, pageY: 175 };
    const options = {
      origin: { x: 0, y: 0 },
      start: { x: 100, y: 200 },
      vertex: 'y',
    };

    const expected = {
      x: 0,
      y: -25,
    };
    expect(getPanOrigin(e, options)).toEqual(expected);
  });

  it('should get scale', () => {
    const e = { deltaY: 20 };
    const scale = 2;

    const expected = {
      scale: 1.90246,
      zoom: 0.95123,
    };
    expect(getScale(e, scale)).toEqual(expected);
  });

  it('should get wheel origin', () => {
    const origin = { x: 25, y: 100 };
    const position = { x: 100, y: 150 };
    const zoom = 5;

    const expected = {
      x: -275,
      y: -100,
    };
    expect(getWheelOrigin(position, zoom, origin)).toEqual(expected);
  });

  describe('get wheel position', () => {
    let currentTarget;
    let getBoundingClientRect;

    beforeAll(() => {
      getBoundingClientRect = jest.fn();
      currentTarget = {
        querySelector: () => ({
          getBoundingClientRect,
        }),
      };
    });

    it('should get wheel position for the center of the plot', () => {
      getBoundingClientRect.mockReturnValue({ height: 250, width: 300 });
      const e = {
        currentTarget,
        pageX: 100,
        pageY: 150,
      };
      const options = {
        id: 'test',
        vertex: 'center',
      };

      const expected = {
        x: 150,
        y: 125,
      };
      expect(getWheelPosition(e, options)).toEqual(expected);
    });

    it('should get wheel position for the x axis', () => {
      getBoundingClientRect.mockReturnValue({ left: 25, width: 300 });
      const e = {
        currentTarget,
        pageX: 100,
        pageY: 150,
      };
      const options = {
        id: 'test',
        vertex: 'x',
      };

      const expected = {
        x: 75,
        y: 150,
      };
      expect(getWheelPosition(e, options)).toEqual(expected);
    });

    it('should get wheel position for the y axis', () => {
      getBoundingClientRect.mockReturnValue({ height: 250, top: 50 });
      const e = {
        currentTarget,
        pageX: 100,
        pageY: 150,
      };
      const options = {
        id: 'test',
        vertex: 'y',
      };

      const expected = {
        x: 125,
        y: 100,
      };
      expect(getWheelPosition(e, options)).toEqual(expected);
    });

    it('should get wheel position for the plot', () => {
      getBoundingClientRect.mockReturnValue({ left: 25, top: 50 });
      const e = {
        currentTarget,
        pageX: 100,
        pageY: 150,
      };
      const options = {
        id: 'test',
        vertex: 'plot',
      };

      const expected = {
        x: 75,
        y: 100,
      };
      expect(getWheelPosition(e, options)).toEqual(expected);
    });
  });
});

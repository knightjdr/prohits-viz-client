import simulant from 'simulant';

import handlers from './event-handlers';
import * as utils from './utils';

describe('Plot event handlers', () => {
  describe('pan', () => {
    let preventDefault;
    let setTransform;

    beforeAll(() => {
      preventDefault = jest.fn();
      setTransform = jest.fn();
      const e = {
        pageX: 100,
        pageY: 150,
        preventDefault,
      };
      const options = {
        setTransform,
        transform: {
          origin: { x: 0, y: 0 },
        },
        vertex: 'plot',
      };
      handlers.pan(e, options);
    });

    it('should prevent default', () => {
      expect(preventDefault).toHaveBeenCalled();
    });

    it('should set transform', () => {
      expect(setTransform).toHaveBeenCalledWith({
        mouseDown: true,
        origin: { x: 0, y: 0 },
      });
    });

    it('should set transform in response to mouse move', () => {
      setTransform.mockClear();

      utils.defineMatrices = jest.fn().mockReturnValue({
        plot: 'matrix(1, 0, 0, 1, 100, 150)',
        xAxis: 'matrix(1, 0, 0, 1, 100, 0)',
        yAxis: 'matrix(1, 0, 0, 1, 0, 150)',
      });
      utils.getPanOrigin = jest.fn().mockReturnValue({ x: 50, y: 75 });
      const event = simulant('mousemove', { pageX: 200, pageY: 250 });
      simulant.fire(window, event);

      expect(utils.getPanOrigin).toHaveBeenCalledWith(
        event,
        {
          origin: { x: 0, y: 0 },
          start: { x: 100, y: 150 },
          vertex: 'plot',
        },
      );
      expect(setTransform).toHaveBeenCalledWith({
        origin: { x: 0, y: 0 },
        matrix: {
          plot: 'matrix(1, 0, 0, 1, 100, 150)',
          xAxis: 'matrix(1, 0, 0, 1, 100, 0)',
          yAxis: 'matrix(1, 0, 0, 1, 0, 150)',
        },
      });
    });

    it('should set transform in response to mouse up', () => {
      setTransform.mockClear();

      utils.defineMatrices = jest.fn().mockReturnValue({
        plot: 'matrix(1, 0, 0, 1, 100, 150)',
        xAxis: 'matrix(1, 0, 0, 1, 100, 0)',
        yAxis: 'matrix(1, 0, 0, 1, 0, 150)',
      });
      utils.getPanOrigin = jest.fn().mockReturnValue({ x: 50, y: 75 });
      const event = simulant('mouseup', { pageX: 200, pageY: 250 });
      simulant.fire(window, event);

      expect(utils.getPanOrigin).toHaveBeenCalledWith(
        event,
        {
          origin: { x: 0, y: 0 },
          start: { x: 100, y: 150 },
          vertex: 'plot',
        },
      );
      expect(setTransform).toHaveBeenCalledWith({
        origin: { x: 50, y: 75 },
        matrix: {
          plot: 'matrix(1, 0, 0, 1, 100, 150)',
          xAxis: 'matrix(1, 0, 0, 1, 100, 0)',
          yAxis: 'matrix(1, 0, 0, 1, 0, 150)',
        },
      });

      utils.defineMatrices.mockRestore();
      utils.getPanOrigin.mockRestore();
    });
  });

  describe('wheel', () => {
    let setTransform;

    afterAll(() => {
      utils.defineMatrices.mockRestore();
      utils.getScale.mockRestore();
      utils.getWheelPosition.mockRestore();
      utils.getWheelOrigin.mockRestore();
    });

    beforeAll(() => {
      setTransform = jest.fn();

      utils.defineMatrices = jest.fn().mockReturnValue({
        plot: 'matrix(1, 0, 0, 1, 100, 150)',
        xAxis: 'matrix(1, 0, 0, 1, 100, 0)',
        yAxis: 'matrix(1, 0, 0, 1, 0, 150)',
      });
      utils.getScale = jest.fn().mockReturnValue({ scale: 2, zoom: 1 });
      utils.getWheelPosition = jest.fn().mockReturnValue({ x: 50, y: 75 });
      utils.getWheelOrigin = jest.fn().mockReturnValue({ x: 25, y: 25 });

      const options = {
        setTransform,
        transform: {
          origin: { x: 0, y: 0 },
        },
      };
      handlers.zoom({}, options);
    });

    it('should set transform', () => {
      expect(setTransform).toHaveBeenCalledWith({
        origin: { x: 25, y: 25 },
        scale: 2,
        matrix: {
          plot: 'matrix(1, 0, 0, 1, 100, 150)',
          xAxis: 'matrix(1, 0, 0, 1, 100, 0)',
          yAxis: 'matrix(1, 0, 0, 1, 0, 150)',
        },
      });
    });
  });
});

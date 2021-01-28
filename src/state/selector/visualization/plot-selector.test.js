import { selectPlot, selectPlotLabels } from './plot-selector';

const state = {
  display: {
    main: {
      selectedPlot: 0,
    },
  },
  parameters: {
    imageType: 'scatter',
  },
  plots: [
    {
      labels: { x: 'bait1', y: 'bait2' },
      points: [
        { label: 'gene1', x: 10, y: 15 },
        { label: 'gene3', x: 10, y: 15 },
        { label: 'gene2', x: 10, y: 15 },
      ],
    },
    {
      labels: { x: 'bait3', y: 'bait4' },
      points: [
        { label: 'gene4', x: 10, y: 15 },
        { label: 'gene5', x: 10, y: 15 },
        { label: 'gene6', x: 10, y: 15 },
      ],
    },
  ],
  tabs: {
    activeSnapshot: 'main',
  },
};

describe('Plot selector', () => {
  it('should return selected plot', () => {
    const expected = {
      labels: { x: 'bait1', y: 'bait2' },
      points: [
        { label: 'gene1', x: 10, y: 15 },
        { label: 'gene3', x: 10, y: 15 },
        { label: 'gene2', x: 10, y: 15 },
      ],
    };
    expect(selectPlot(state)).toEqual(expected);
  });

  describe('plot labels', () => {
    it('should return plot point labels', () => {
      const expected = {
        labels: ['gene1', 'gene3', 'gene2'],
        order: [0, 2, 1],
        sorted: ['gene1', 'gene2', 'gene3'],
      };
      expect(selectPlotLabels(state)).toEqual(expected);
    });

    it('should return empty object when plot not defined', () => {
      const expected = {};
      const testState = {
        display: state.display,
        tabs: state.tabs,
      };
      expect(selectPlotLabels(testState)).toEqual(expected);
    });
  });
});

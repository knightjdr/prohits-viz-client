import { selectPlot, selectCircHeatmapLabels } from './circheatmap-selector';

const state = {
  display: {
    main: {
      selectedPlot: 0,
    },
  },
  plots: [
    {
      name: 'plot1',
      readouts: [
        { label: 'gene1', segments: {} },
        { label: 'gene3', segments: {} },
        { label: 'gene2', segments: {} },
      ],
    },
    {
      name: 'plot2',
      readouts: [
        { label: 'gene4', segments: {} },
        { label: 'gene5', segments: {} },
        { label: 'gene6', segments: {} },
      ],
    },
  ],
  readouts: {
    main: {
      current: [
        { label: 'gene1', segments: {} },
        { label: 'gene3', segments: {} },
        { label: 'gene2', segments: {} },
      ],
    },
  },
  tabs: {
    activeSnapshot: 'main',
  },
};

describe('Plot selector', () => {
  it('should return selected plot', () => {
    const expected = {
      name: 'plot1',
      readouts: [
        { label: 'gene1', segments: {} },
        { label: 'gene3', segments: {} },
        { label: 'gene2', segments: {} },
      ],
    };
    expect(selectPlot(state)).toEqual(expected);
  });

  describe('plot labels', () => {
    it('should return plot readout labels', () => {
      const expected = {
        labels: ['gene1', 'gene3', 'gene2'],
        order: [0, 2, 1],
        sorted: ['gene1', 'gene2', 'gene3'],
      };
      expect(selectCircHeatmapLabels(state)).toEqual(expected);
    });

    it('should return empty object when plot not defined', () => {
      const expected = {};
      const testState = {
        readouts: {},
        tabs: state.tabs,
      };
      expect(selectCircHeatmapLabels(testState)).toEqual(expected);
    });
  });
});

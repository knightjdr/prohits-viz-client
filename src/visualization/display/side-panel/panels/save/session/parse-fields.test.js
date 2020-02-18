import parseFields, { parseField } from './parse-fields';

describe('Parse field handlers', () => {
  it('should filter analysis tasks that are still processing', () => {
    const data = {
      'analysis-1': { processing: false, type: 'gprofiler' },
      'analysis-2': { processing: true, type: 'gprofiler' },
      'analysis-3': { processing: false, type: 'gprofiler' },
    };

    const expected = [
      {
        'analysis-1': { processing: false, type: 'gprofiler' },
        'analysis-3': { processing: false, type: 'gprofiler' },
      },
      ['analysis-2'],
    ];

    expect(parseField('analysis', data)).toEqual(expected);
  });

  it('should return annotations as is', () => {
    const data = {
      main: {
        color: '#f44338',
        fontSize: 14,
        list: {
          id: {
            position: { x: 0.5, y: 0.1 },
            text: 'test',
          },
        },
        show: false,
      },
    };

    const expected = [data, []];

    expect(parseField('annotations', data)).toEqual(expected);
  });

  it('should return column DB as is', () => {
    const data = ['column1', 'column2', 'column3'];

    const expected = [data, []];

    expect(parseField('columnDB', data)).toEqual(expected);
  });

  it('should return columns as is', () => {
    const data = {
      main: {
        defaultOrder: [0, 1, 2],
        deleted: [0],
        order: [1, 2],
        ref: 'a',
      },
    };

    const expected = [data, []];

    expect(parseField('columns', data)).toEqual(expected);
  });

  it('should return empty objects for snapshot dimensions', () => {
    const data = {
      main: {
        columns: 10,
        height: 200,
        rows: 5,
        width: 100,
      },
      'snapshot-1': {
        columns: 10,
        height: 200,
        rows: 5,
        width: 100,
      },
    };

    const expected = [
      {
        main: {},
        'snapshot-1': {},
      },
      [],
    ];

    expect(parseField('dimensions', data)).toEqual(expected);
  });

  it('should return display as is', () => {
    const data = {
      main: {
        deleteFromImage: true,
        reorderImage: true,
        plotFixed: true,
        showTooltips: true,
      },
    };

    const expected = [data, []];

    expect(parseField('display', data)).toEqual(expected);
  });

  it('should return exporter format only', () => {
    const data = {
      error: false,
      exporting: false,
      file: 'file.png',
      format: 'png',
    };

    const expected = [
      { format: 'png' },
      [],
    ];

    expect(parseField('exporter', data)).toEqual(expected);
  });

  it('should return gprofiler as is', () => {
    const data = {
      all_results: false,
      background: '',
      domain_scope: 'annotated',
    };

    const expected = [data, []];

    expect(parseField('gprofiler', data)).toEqual(expected);
  });

  it('should return markers as is', () => {
    const data = {
      main: {
        color: '#f44338',
        list: {
          id: {
            height: 20,
            width: 100,
            x: 0.1,
            y: 0.2,

          },
        },
        record: true,
        show: false,
      },
    };

    const expected = [data, []];

    expect(parseField('markers', data)).toEqual(expected);
  });

  it('should filter fields from minimap regarding synching state', () => {
    const data = {
      main: {
        image: null,
        isSyncing: true,
        needSyncing: false,
        syncError: true,
        syncedImage: null,
        updateOriginal: false,
      },
    };

    const expected = [
      {
        main: {
          image: null,
          needSyncing: false,
          syncedImage: null,
        },
      },
      [],
    ];

    expect(parseField('minimap', data)).toEqual(expected);
  });

  it('should return panel as is', () => {
    const data = {
      open: false,
      tab: 'info',
    };

    const expected = [data, []];

    expect(parseField('panel', data)).toEqual(expected);
  });

  it('should return parameters as is', () => {
    const data = {
      abundanceColumn: 'Spectral count',
      scoreColumn: 'FDR',
      scoreType: 'gte',
      otherfield: 1,
    };

    const expected = [data, []];

    expect(parseField('parameters', data)).toEqual(expected);
  });

  it('should return poi as is', () => {
    const data = {
      main: {
        columns: [1, 3],
        rows: [5, 2],
      },
    };

    const expected = [data, []];

    expect(parseField('poi', data)).toEqual(expected);
  });

  it('should return position as is', () => {
    const data = {
      main: {
        x: 0.5,
        y: 0.5,
      },
    };

    const expected = [data, []];

    expect(parseField('position', data)).toEqual(expected);
  });

  it('should return rowDB as is', () => {
    const data = [
      {
        data: {},
        name: 'row1',
      },
    ];

    const expected = [data, []];

    expect(parseField('rowDB', data)).toEqual(expected);
  });

  it('should return rows as is', () => {
    const data = {
      main: {
        defaultOrder: [0, 1, 2],
        deleted: [0],
        direction: 'asc',
        order: [2, 1],
        sortBy: 'a',
      },
    };

    const expected = [data, []];

    expect(parseField('rows', data)).toEqual(expected);
  });

  it('should return searchStatus as is', () => {
    const data = {
      main: {
        columns: { a: true, aa: true },
        match: true,
        rows: { aaa: true },
        term: 'a',
      },
    };

    const expected = [data, []];

    expect(parseField('searchStatus', data)).toEqual(expected);
  });

  it('should return settings as is', () => {
    const data = {
      main: {
        current: {
          abundanceCap: 40,
          cellSize: 10,
          edgeColor: 'yellow',
        },
        default: {
          abundanceCap: 40,
          cellSize: 10,
          edgeColor: 'yellow',
        },
      },
    };

    const expected = [data, []];

    expect(parseField('settings', data)).toEqual(expected);
  });

  describe('tabs', () => {
    it('should return tab state as is', () => {
      const blacklist = {
        analysis: [],
      };
      const data = {
        active: 'go-1',
        analysisID: 1,
        activeSnapshot: 'snapshot-1',
        availableAnalyses: ['go-1'],
        availableSnapshots: ['main', 'snapshot-1'],
        snapshotID: 1,
        tabType: 'analysis',
      };

      const expected = [data, []];

      expect(parseField('tabs', data, blacklist)).toEqual(expected);
    });

    it('should return set tab view to main when analysis is blacklisted', () => {
      const blacklist = {
        analysis: ['go-2'],
      };
      const data = {
        active: 'go-2',
        analysisID: 2,
        activeSnapshot: 'snapshot-1',
        availableAnalyses: ['go-1', 'go-2'],
        availableSnapshots: ['main', 'snapshot-1'],
        snapshotID: 1,
        tabType: 'analysis',
      };

      const expected = [
        {
          active: 'main',
          analysisID: 2,
          activeSnapshot: 'snapshot-1',
          availableAnalyses: ['go-1'],
          availableSnapshots: ['main', 'snapshot-1'],
          snapshotID: 1,
          tabType: 'snapshot',
        },
        [],
      ];

      expect(parseField('tabs', data, blacklist)).toEqual(expected);
    });
  });
});

describe('Parse session', () => {
  it('should parse requested fields', () => {
    const fields = ['analysis', 'parameters', 'tabs'];
    const session = {
      analysis: {
        'analysis-1': { processing: false, type: 'gprofiler' },
        'analysis-2': { processing: true, type: 'gprofiler' },
        'analysis-3': { processing: false, type: 'gprofiler' },
      },
      news: ['news1', 'news2'],
      parameters: {
        abundanceColumn: 'Spectral count',
        scoreColumn: 'FDR',
        scoreType: 'gte',
        otherfield: 1,
      },
      tabs: {
        active: 'analysis-2',
        analysisID: 3,
        activeSnapshot: 'snapshot-1',
        availableAnalyses: ['analysis-1', 'analysis-2', 'analysis-3'],
        availableSnapshots: ['main', 'snapshot-1'],
        snapshotID: 1,
        tabType: 'analysis',
      },
    };

    const expected = {
      analysis: {
        'analysis-1': { processing: false, type: 'gprofiler' },
        'analysis-3': { processing: false, type: 'gprofiler' },
      },
      parameters: {
        abundanceColumn: 'Spectral count',
        scoreColumn: 'FDR',
        scoreType: 'gte',
        otherfield: 1,
      },
      tabs: {
        active: 'main',
        analysisID: 3,
        activeSnapshot: 'snapshot-1',
        availableAnalyses: ['analysis-1', 'analysis-3'],
        availableSnapshots: ['main', 'snapshot-1'],
        snapshotID: 1,
        tabType: 'snapshot',
      },
    };

    expect(parseFields(session, fields)).toEqual(expected);
  });
});

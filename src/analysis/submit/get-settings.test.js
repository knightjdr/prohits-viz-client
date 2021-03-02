import getSettings from './get-settings';

describe('Analysis settings', () => {
  describe('condition-condition', () => {
    describe('default settings', () => {
      let settings;

      beforeAll(() => {
        const form = {
          tool: 'condition-condition',
          minAbundance: 0,
          primaryFilter: 0.01,
          secondaryFilter: 0.05,
          scoreType: 'lte',
        };
        settings = getSettings(form);
      });

      it('should return min abundance filter value', () => {
        const minAbundanceIndex = settings.findIndex((setting) => (setting.key === 'minAbundance'));
        expect(settings[minAbundanceIndex].text).toBe('Minimum abundance: 0');
      });

      it('should return primary filter value', () => {
        const primaryFilterIndex = settings.findIndex((setting) => (setting.key === 'primaryFilter'));
        expect(settings[primaryFilterIndex].text).toBe('Primary filter: 0.01');
      });

      it('should return score type', () => {
        const scoreTypeIndex = settings.findIndex((setting) => (setting.key === 'scoreType'));
        expect(settings[scoreTypeIndex].text).toBe('Score type: smaller scores better');
      });

      it('should return secondary filter value', () => {
        const secondaryFilterIndex = settings.findIndex((setting) => (setting.key === 'secondaryFilter'));
        expect(settings[secondaryFilterIndex].text).toBe('Secondary filter: 0.05');
      });
    });

    describe('no options not set', () => {
      let settings;

      beforeAll(() => {
        const form = {
          tool: 'condition-condition',
        };
        settings = getSettings(form);
      });

      it('should return min abundance not set', () => {
        const minAbundanceIndex = settings.findIndex((setting) => (setting.key === 'minAbundance'));
        expect(settings[minAbundanceIndex].text).toBe('Minimum abundance: not set');
      });

      it('should report primary filter value not set', () => {
        const primaryFilterIndex = settings.findIndex((setting) => (setting.key === 'primaryFilter'));
        expect(settings[primaryFilterIndex].text).toBe('Primary filter: not set');
      });

      it('should report score type not set', () => {
        const scoreTypeIndex = settings.findIndex((setting) => (setting.key === 'scoreType'));
        expect(settings[scoreTypeIndex].text).toBe('Score type: not set');
      });

      it('should report secondary filter value not set', () => {
        const secondaryFilterIndex = settings.findIndex((setting) => (setting.key === 'secondaryFilter'));
        expect(settings[secondaryFilterIndex].text).toBe('Secondary filter: not set');
      });
    });
  });

  describe('correlation', () => {
    describe('default settings', () => {
      let settings;

      beforeAll(() => {
        const form = {
          tool: 'correlation',
          conditionAbundanceFilter: 0,
          conditionScoreFilter: 0.01,
          readoutAbundanceFilter: 5,
          readoutScoreFilter: 0.05,
          scoreType: 'lte',
        };
        settings = getSettings(form);
      });

      it('should return condition abundance filter value', () => {
        const conditionAbundanceFilterIndex = settings.findIndex(
          (setting) => (setting.key === 'conditionAbundanceFilter'),
        );
        expect(settings[conditionAbundanceFilterIndex].text).toBe('Condition abundance filter: 0');
      });

      it('should return condition score filter value', () => {
        const conditionScoreFilterIndex = settings.findIndex((setting) => (setting.key === 'conditionScoreFilter'));
        expect(settings[conditionScoreFilterIndex].text).toBe('Condition score filter: 0.01');
      });

      it('should return readout abundance filter value', () => {
        const readoutAbundanceFilterIndex = settings.findIndex(
          (setting) => (setting.key === 'readoutAbundanceFilter'),
        );
        expect(settings[readoutAbundanceFilterIndex].text).toBe('Readout abundance filter: 5');
      });

      it('should return readout score filter value', () => {
        const readoutScoreFilterIndex = settings.findIndex((setting) => (setting.key === 'readoutScoreFilter'));
        expect(settings[readoutScoreFilterIndex].text).toBe('Readout score filter: 0.05');
      });

      it('should return score type', () => {
        const scoreTypeIndex = settings.findIndex((setting) => (setting.key === 'scoreType'));
        expect(settings[scoreTypeIndex].text).toBe('Score type: smaller scores better');
      });
    });

    describe('no options not set', () => {
      let settings;

      beforeAll(() => {
        const form = {
          tool: 'correlation',
        };
        settings = getSettings(form);
      });

      it('should return condition abundance filter not set', () => {
        const conditionAbundanceFilterIndex = settings.findIndex(
          (setting) => (setting.key === 'conditionAbundanceFilter'),
        );
        expect(settings[conditionAbundanceFilterIndex].text).toBe('Condition abundance filter: not set');
      });

      it('should return condition score filter not set', () => {
        const conditionScoreFilterIndex = settings.findIndex((setting) => (setting.key === 'conditionScoreFilter'));
        expect(settings[conditionScoreFilterIndex].text).toBe('Condition score filter: not set');
      });

      it('should return readout abundance filter not set', () => {
        const readoutAbundanceFilterIndex = settings.findIndex(
          (setting) => (setting.key === 'readoutAbundanceFilter'),
        );
        expect(settings[readoutAbundanceFilterIndex].text).toBe('Readout abundance filter: not set');
      });

      it('should return readout score filter not set', () => {
        const readoutScoreFilterIndex = settings.findIndex((setting) => (setting.key === 'readoutScoreFilter'));
        expect(settings[readoutScoreFilterIndex].text).toBe('Readout score filter: not set');
      });

      it('should report score type not set', () => {
        const scoreTypeIndex = settings.findIndex((setting) => (setting.key === 'scoreType'));
        expect(settings[scoreTypeIndex].text).toBe('Score type: not set');
      });
    });
  });

  describe('dotplot', () => {
    describe('default settings', () => {
      let settings;

      beforeAll(() => {
        const form = {
          tool: 'dotplot',
          clustering: 'hierarchical',
          primaryFilter: 0.01,
          secondaryFilter: 0.05,
          minAbundance: 0,
          scoreType: 'lte',
        };
        settings = getSettings(form);
      });

      it('should return primary filter value', () => {
        const primaryFilterIndex = settings.findIndex((setting) => (setting.key === 'primaryFilter'));
        expect(settings[primaryFilterIndex].text).toBe('Primary filter: 0.01');
      });

      it('should return secondary filter value', () => {
        const secondaryFilterIndex = settings.findIndex((setting) => (setting.key === 'secondaryFilter'));
        expect(settings[secondaryFilterIndex].text).toBe('Secondary filter: 0.05');
      });

      it('should return minimum abundance value', () => {
        const minAbundanceIndex = settings.findIndex((setting) => (setting.key === 'minAbundance'));
        expect(settings[minAbundanceIndex].text).toBe('Minimum abundance: 0');
      });

      it('should return clustering value', () => {
        const clusteringIndex = settings.findIndex((setting) => (setting.key === 'clustering'));
        expect(settings[clusteringIndex].text).toBe('Clustering type: hierarchical');
      });

      it('should return score type', () => {
        const scoreTypeIndex = settings.findIndex((setting) => (setting.key === 'scoreType'));
        expect(settings[scoreTypeIndex].text).toBe('Score type: smaller scores better');
      });
    });

    describe('no options not set', () => {
      let settings;

      beforeAll(() => {
        const form = {
          tool: 'dotplot',
        };
        settings = getSettings(form);
      });

      it('should report primary filter value not set', () => {
        const primaryFilterIndex = settings.findIndex((setting) => (setting.key === 'primaryFilter'));
        expect(settings[primaryFilterIndex].text).toBe('Primary filter: not set');
      });

      it('should report secondary filter value not set', () => {
        const secondaryFilterIndex = settings.findIndex((setting) => (setting.key === 'secondaryFilter'));
        expect(settings[secondaryFilterIndex].text).toBe('Secondary filter: not set');
      });

      it('should report minimum abundance value not set', () => {
        const minAbundanceIndex = settings.findIndex((setting) => (setting.key === 'minAbundance'));
        expect(settings[minAbundanceIndex].text).toBe('Minimum abundance: not set');
      });

      it('should report clustering value not set', () => {
        const clusteringIndex = settings.findIndex((setting) => (setting.key === 'clustering'));
        expect(settings[clusteringIndex].text).toBe('Clustering type: not set');
      });

      it('should report score type not set', () => {
        const scoreTypeIndex = settings.findIndex((setting) => (setting.key === 'scoreType'));
        expect(settings[scoreTypeIndex].text).toBe('Score type: not set');
      });
    });
  });

  describe('scv', () => {
    describe('default settings', () => {
      let settings;

      beforeAll(() => {
        const form = {
          tool: 'scv',
          minAbundance: 0,
          primaryFilter: 0.01,
          scoreType: 'lte',
        };
        settings = getSettings(form);
      });

      it('should return minimum abundance filter value', () => {
        const minAbundanceIndex = settings.findIndex((setting) => (setting.key === 'minAbundance'));
        expect(settings[minAbundanceIndex].text).toBe('Minimum abundance: 0');
      });

      it('should return primary filter value', () => {
        const primaryFilterIndex = settings.findIndex((setting) => (setting.key === 'primaryFilter'));
        expect(settings[primaryFilterIndex].text).toBe('Primary filter: 0.01');
      });

      it('should return score type', () => {
        const scoreTypeIndex = settings.findIndex((setting) => (setting.key === 'scoreType'));
        expect(settings[scoreTypeIndex].text).toBe('Score type: smaller scores better');
      });
    });

    describe('no options not set', () => {
      let settings;

      beforeAll(() => {
        const form = {
          tool: 'specificity',
        };
        settings = getSettings(form);
      });

      it('should return minimum abundance not set', () => {
        const minAbundanceIndex = settings.findIndex((setting) => (setting.key === 'minAbundance'));
        expect(settings[minAbundanceIndex].text).toBe('Minimum abundance: not set');
      });

      it('should report primary filter value not set', () => {
        const primaryFilterIndex = settings.findIndex((setting) => (setting.key === 'primaryFilter'));
        expect(settings[primaryFilterIndex].text).toBe('Primary filter: not set');
      });

      it('should report score type not set', () => {
        const scoreTypeIndex = settings.findIndex((setting) => (setting.key === 'scoreType'));
        expect(settings[scoreTypeIndex].text).toBe('Score type: not set');
      });
    });
  });

  describe('specificity', () => {
    describe('default settings', () => {
      let settings;

      beforeAll(() => {
        const form = {
          tool: 'specificity',
          minAbundance: 0,
          primaryFilter: 0.01,
          scoreType: 'lte',
          specificityMetric: 'fe',
        };
        settings = getSettings(form);
      });

      it('should return minimum abundance value', () => {
        const minAbundanceIndex = settings.findIndex((setting) => (setting.key === 'minAbundance'));
        expect(settings[minAbundanceIndex].text).toBe('Minimum abundance: 0');
      });

      it('should return primary filter value', () => {
        const primaryFilterIndex = settings.findIndex((setting) => (setting.key === 'primaryFilter'));
        expect(settings[primaryFilterIndex].text).toBe('Primary filter: 0.01');
      });

      it('should return score type', () => {
        const scoreTypeIndex = settings.findIndex((setting) => (setting.key === 'scoreType'));
        expect(settings[scoreTypeIndex].text).toBe('Score type: smaller scores better');
      });

      it('should return metric value', () => {
        const specificityMetricIndex = settings.findIndex((setting) => (setting.key === 'specificityMetric'));
        expect(settings[specificityMetricIndex].text).toBe('Metric: fe');
      });
    });

    describe('no options not set', () => {
      let settings;

      beforeAll(() => {
        const form = {
          tool: 'specificity',
        };
        settings = getSettings(form);
      });

      it('should return minimum abundance not set', () => {
        const minAbundanceIndex = settings.findIndex((setting) => (setting.key === 'minAbundance'));
        expect(settings[minAbundanceIndex].text).toBe('Minimum abundance: not set');
      });

      it('should report primary filter value not set', () => {
        const primaryFilterIndex = settings.findIndex((setting) => (setting.key === 'primaryFilter'));
        expect(settings[primaryFilterIndex].text).toBe('Primary filter: not set');
      });

      it('should report score type not set', () => {
        const scoreTypeIndex = settings.findIndex((setting) => (setting.key === 'scoreType'));
        expect(settings[scoreTypeIndex].text).toBe('Score type: not set');
      });
    });
  });

  describe('common', () => {
    describe('optional tags', () => {
      let settings;

      beforeAll(() => {
        const form = {
          tool: 'dotplot',
          ctrlSub: true,
          readoutLengthNorm: true,
        };
        settings = getSettings(form);
      });

      it('should return ctrl subtraction value', () => {
        const ctrlSubIndex = settings.findIndex((setting) => (setting.key === 'ctrlSub'));
        expect(settings[ctrlSubIndex].text).toBe('Control subtraction is selected');
      });

      it('should return readout normalization value', () => {
        const readoutLengthNormIndex = settings.findIndex((setting) => (setting.key === 'readoutLengthNorm'));
        expect(settings[readoutLengthNormIndex].text).toBe('Readout length normalization is selected');
      });
    });

    describe('normalization tags', () => {
      describe('total normalization', () => {
        let settings;

        beforeAll(() => {
          settings = getSettings({
            tool: 'dotplot',
            normalization: 'total',
          });
        });

        it('should return total tag', () => {
          const normalizationIndex = settings.findIndex((setting) => (setting.key === 'normalization'));
          expect(settings[normalizationIndex].text).toBe('Condition normalization: total abundance');
        });
      });

      describe('readout normalization', () => {
        let settings;

        beforeAll(() => {
          settings = getSettings({
            tool: 'dotplot',
            normalization: 'readout',
          });
        });

        it('should return readout tag', () => {
          const normalizationIndex = settings.findIndex((setting) => (setting.key === 'normalization'));
          expect(settings[normalizationIndex].text).toBe('Condition normalization: specific readout');
        });
      });
    });

    describe('log tags', () => {
      describe('base 2', () => {
        let settings;

        beforeAll(() => {
          settings = getSettings({
            tool: 'dotplot',
            logBase: 2,
          });
        });

        it('should return log tag', () => {
          const logTransformIndex = settings.findIndex((setting) => (setting.key === 'logBase'));
          expect(settings[logTransformIndex].text).toBe('Log transformation: base 2');
        });
      });
    });
  });
});

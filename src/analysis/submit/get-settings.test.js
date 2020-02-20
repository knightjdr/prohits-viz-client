import getSettings from './get-settings';

describe('Analysis settings', () => {
  describe('default dotplot analysis', () => {
    let settings;

    beforeAll(() => {
      const form = {
        tool: 'dotplot',
        clustering: 'hierarchical',
        primaryFilter: 0.01,
        secondaryFilter: 0.05,
        minAbundance: 0,
      };
      settings = getSettings(form);
    });

    it('should return primary filter value', () => {
      const primaryFilterIndex = settings.findIndex(setting => (setting.key === 'primaryFilter'));
      expect(settings[primaryFilterIndex].text).toBe('Primary filter: 0.01');
    });

    it('should return secondary filter value', () => {
      const secondaryFilterIndex = settings.findIndex(setting => (setting.key === 'secondaryFilter'));
      expect(settings[secondaryFilterIndex].text).toBe('Secondary filter: 0.05');
    });

    it('should return minimum abundance value', () => {
      const minAbundanceIndex = settings.findIndex(setting => (setting.key === 'minAbundance'));
      expect(settings[minAbundanceIndex].text).toBe('Minimum abundance: 0');
    });

    it('should return clustering value', () => {
      const clusteringIndex = settings.findIndex(setting => (setting.key === 'clustering'));
      expect(settings[clusteringIndex].text).toBe('Clustering type: hierarchical');
    });
  });

  describe('dotplot analysis with options not set', () => {
    let settings;

    beforeAll(() => {
      const form = {
        tool: 'dotplot',
      };
      settings = getSettings(form);
    });

    it('should report primary filter value not set', () => {
      const primaryFilterIndex = settings.findIndex(setting => (setting.key === 'primaryFilter'));
      expect(settings[primaryFilterIndex].text).toBe('Primary filter: not set');
    });

    it('should report secondary filter value not set', () => {
      const secondaryFilterIndex = settings.findIndex(setting => (setting.key === 'secondaryFilter'));
      expect(settings[secondaryFilterIndex].text).toBe('Secondary filter: not set');
    });

    it('should report minimum abundance value not set', () => {
      const minAbundanceIndex = settings.findIndex(setting => (setting.key === 'minAbundance'));
      expect(settings[minAbundanceIndex].text).toBe('Minimum abundance: not set');
    });

    it('should report clustering value not set', () => {
      const clusteringIndex = settings.findIndex(setting => (setting.key === 'clustering'));
      expect(settings[clusteringIndex].text).toBe('Clustering type: not set');
    });
  });

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
      const ctrlSubIndex = settings.findIndex(setting => (setting.key === 'ctrlSub'));
      expect(settings[ctrlSubIndex].text).toBe('Control subtraction is selected');
    });

    it('should return readout normalization value', () => {
      const readoutLengthNormIndex = settings.findIndex(setting => (setting.key === 'readoutLengthNorm'));
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
        const normalizationIndex = settings.findIndex(setting => (setting.key === 'normalization'));
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
        const normalizationIndex = settings.findIndex(setting => (setting.key === 'normalization'));
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
        const logTransformIndex = settings.findIndex(setting => (setting.key === 'logBase'));
        expect(settings[logTransformIndex].text).toBe('Log transformation: base 2');
      });
    });
  });
});

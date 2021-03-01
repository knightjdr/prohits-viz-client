import defineTranslation from './define-translation';

describe('Plot translation', () => {
  it('should return translation to set plot at left edge when plot is fixed', () => {
    const canTranslate = false;
    const panelOpen = false;
    const plotFixed = true;
    const windowWidth = 1024;
    const wrapperWidth = 424;
    expect(defineTranslation(canTranslate, plotFixed, panelOpen, windowWidth, wrapperWidth)).toBe(-280);
  });

  describe('plot not fixed and panel visible', () => {
    it('should return translation when available width is greater than panel', () => {
      const canTranslate = true;
      const panelOpen = true;
      const plotFixed = false;
      const windowWidth = 1024;
      const wrapperWidth = 424;
      expect(defineTranslation(canTranslate, plotFixed, panelOpen, windowWidth, wrapperWidth)).toBe(-175);
    });

    it('should return translation when available width is less than panel', () => {
      const canTranslate = true;
      const panelOpen = true;
      const plotFixed = false;
      const windowWidth = 1024;
      const wrapperWidth = 824;
      expect(defineTranslation(canTranslate, plotFixed, panelOpen, windowWidth, wrapperWidth)).toBe(-80);
    });
  });

  describe('no translation', () => {
    it('should return 0 when plot is not fixed and cannot defineTranslation', () => {
      const canTranslate = false;
      const panelOpen = true;
      const plotFixed = false;
      const windowWidth = 1024;
      const wrapperWidth = 424;
      expect(defineTranslation(canTranslate, plotFixed, panelOpen, windowWidth, wrapperWidth)).toBe(0);
    });

    it('should return 0 when plot is not fixed and panel closed', () => {
      const canTranslate = true;
      const panelOpen = false;
      const plotFixed = false;
      const windowWidth = 1024;
      const wrapperWidth = 424;
      expect(defineTranslation(canTranslate, plotFixed, panelOpen, windowWidth, wrapperWidth)).toBe(0);
    });
  });
});

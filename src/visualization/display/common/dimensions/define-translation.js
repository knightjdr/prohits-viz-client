const PANEL_WIDTH = 350;

const defineTranslation = (canTranslate, plotFixed, panelOpen, windowWidth, wrapperWidth) => {
  if (plotFixed) {
    return -(((windowWidth - wrapperWidth) / 2) - 20);
  } if (canTranslate && panelOpen) {
    const freeWidth = windowWidth - wrapperWidth;
    const sidePanel = PANEL_WIDTH;
    const translateBy = freeWidth > sidePanel
      ? sidePanel / 2
      : (freeWidth / 2) - 20; // Subtract 20 to ensure image does overflow into padding.
    return -translateBy;
  }
  return 0;
};

export default defineTranslation;

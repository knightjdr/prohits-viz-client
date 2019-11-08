import drawDotplot from './draw-dotplot';
import drawHeatmap from './draw-heatmap';

const getCanvasContext = (canvas) => {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  return ctx;
};

const drawCanvas = (canvas, pageSettings) => {
  const { imageType } = pageSettings;
  const ctx = getCanvasContext(canvas);
  if (imageType === 'dotplot') {
    drawDotplot(ctx, pageSettings);
  } else {
    drawHeatmap(ctx, pageSettings);
  }
};

export default drawCanvas;

const defineHelpLink = (imageType, hash) => {
  if (imageType === 'circheatmap') {
    return `/help/visualization/circular-heatmap#${hash}`;
  } if (imageType === 'dotplot' || imageType === 'heatmap') {
    return `/help/visualization/heatmap#${hash}`;
  } if (imageType === 'scatter') {
    return `/help/visualization/scatterplot#${hash}`;
  }
  return '';
};

export default defineHelpLink;

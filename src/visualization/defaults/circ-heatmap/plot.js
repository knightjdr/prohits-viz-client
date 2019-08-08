const fillPlot = (userPlot, userPlots) => {
  const plots = Object.prototype.toString.call(userPlot) === '[object Object]' ? userPlot : userPlots[0];
  return plots;
};

export default fillPlot;

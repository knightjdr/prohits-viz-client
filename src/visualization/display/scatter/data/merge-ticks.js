import removeDuplicates from '../../../../utils/remove-duplicates';
import sort from '../../../../utils/sort';

const areSameScale = (ticks, logBase) => {
  if (logBase !== 'none') {
    return [true];
  }

  const { x, y } = ticks;
  const lastXtick = x[x.length - 1];
  const lastYtick = y[y.length - 1];

  const xbase = Math.floor(Math.log10(lastXtick));
  const ybase = Math.floor(Math.log10(lastYtick));

  const sameScale = xbase === ybase;
  const greaterAxis = xbase > ybase ? 'x' : 'y';
  return [sameScale, greaterAxis];
};

const mergeTicks = (ticks, logBase) => {
  const [sameScale, greaterAxis] = areSameScale(ticks, logBase);

  let tickList = [];
  if (sameScale) {
    tickList = removeDuplicates([...ticks.x, ...ticks.y]);
  } else {
    tickList = ticks[greaterAxis];
  }
  tickList.sort(sort.numeric);
  return tickList;
};

export default mergeTicks;

const links = [
  { route: '/help', text: 'Introduction' },
  {
    route: '/help/analysis',
    text: 'Analysis',
    children: [
      {
        route: '/help/analysis/input-file',
        text: 'Input file',
      },
      {
        route: '/help/analysis/condition-condition',
        text: 'Condition-Condition',
      },
      {
        route: '/help/analysis/correlation',
        text: 'Correlation',
      },
      {
        route: '/help/analysis/dotplot',
        text: 'Dot plot',
      },
      {
        route: '/help/analysis/scv',
        text: 'SCV',
      },
      {
        route: '/help/analysis/specificity',
        text: 'Specificity',
      },
    ],
  },
  {
    route: '/help/visualization',
    text: 'Visualization',
    children: [
      {
        route: '/help/visualization/input-file',
        text: 'Input file',
      },
      {
        route: '/help/visualization/circular-heatmap',
        text: 'Circular heatmap',
      },
      {
        route: '/help/visualization/heatmap',
        text: 'Heat map/dot plot',
      },
      {
        route: '/help/visualization/scatterplot',
        text: 'Scatter plot',
      },
    ],
  },
  { route: '/help/privacy', text: 'Privacy' },
  { route: '/help/citation', text: 'Citation' },
  { route: '/help/about', text: 'About' },
];

export const getLinkOrder = (list) => {
  const leveledList = list.reduce((accum, item) => {
    const { children, route, text } = item;
    accum.push({ route, text });
    if (children) {
      accum.push(...children);
    }
    return accum;
  }, []);

  const numLinks = leveledList.length;
  const linkMap = {};
  let previous = {};
  let next = {};
  leveledList.forEach((item, i) => {
    if (i < numLinks - 1) {
      next = leveledList[i + 1];
    } else {
      next = {};
    }
    linkMap[item.route] = {
      previous,
      next,
    };
    previous = item;
  });
  return linkMap;
};

export const linkOrder = getLinkOrder(links);

export default links;

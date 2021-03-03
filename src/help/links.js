const links = [
  { route: '/help', text: 'Introduction' },
  {
    route: '/help/analysis',
    text: 'Analysis',
    children: [
      {
        route: '/help/analysis/input-file',
        text: 'Input file',
        children: [
          { route: '/help/analysis/input-file', text: 'Input file' },
        ],
      },
      {
        route: '/help/analysis/dotplot',
        text: 'Dot plot',
        children: [
          { route: '/help/analysis/dotplot', text: 'Dot plot' },
        ],
      },
    ],
  },
  {
    route: '/help/visualization',
    text: 'Visualization',
    children: [
      {
        route: '/help/visualization/heatmap',
        text: 'Dot plot/heat map',
        children: [
          { route: '/help/visualization/heatmap/settings', text: 'Settings' },
        ],
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

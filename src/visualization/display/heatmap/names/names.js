import trimText from '../../../../utils/trim-text';

const names = (columns, x, pageWidth, fontSize) => {
  const pageEnd = x + pageWidth;
  const pageNames = columns.slice(x, pageEnd);
  return pageNames.map(name => trimText(name, 'Lato', `${fontSize}px`, 98));
};

export default names;

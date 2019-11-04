import trimText from '../../../../utils/trim-text';

const formatNames = (names, fontSize) => (
  names.map(name => trimText(name, 'Lato', `${fontSize}px`, 98))
);

export default formatNames;

const parseAnalysis = (data) => {
  const parsedAnalysis = {};
  const blacklist = [];

  Object.entries(data).forEach(([key, analysis]) => {
    if (analysis.processing) {
      blacklist.push(key);
    } else {
      parsedAnalysis[key] = analysis;
    }
  });

  return [parsedAnalysis, blacklist];
};

const parseDimensions = (data) => {
  const parsedDimensions = Object.keys(data).reduce((accum, key) => ({ ...accum, [key]: {} }), {});

  return parsedDimensions;
};

const parseExporter = data => ({ format: data.format });

const parseMinimap = data => (
  Object.entries(data).reduce((accum, [key, datum]) => ({
    ...accum,
    [key]: {
      image: datum.image,
      needSyncing: datum.needSyncing,
      syncedImage: datum.syncedImage,
    },
  }), {})
);

const parseTabs = (data, blacklist) => {
  const activeBlacklisted = blacklist.includes(data.active);
  const parsedTabs = {
    ...data,
    active: activeBlacklisted ? 'main' : data.active,
    availableAnalyses: data.availableAnalyses.filter(value => !blacklist.includes(value)),
    tabType: activeBlacklisted ? 'snapshot' : data.tabType,
  };

  return parsedTabs;
};

export const parseField = (field, data, blacklist) => {
  switch (field) {
    case 'analysis':
      return parseAnalysis(data);
    case 'dimensions':
      return [parseDimensions(data), []];
    case 'exporter':
      return [parseExporter(data), []];
    case 'minimap':
      return [parseMinimap(data), []];
    case 'tabs':
      return [parseTabs(data, blacklist.analysis), []];
    default:
      return [data, []];
  }
};

const parseFields = (session, fields) => {
  const parsedSession = {};

  const blacklist = {
    analysis: [],
  };

  fields.forEach((field) => {
    [parsedSession[field], blacklist[field]] = parseField(field, session[field], blacklist);
  });

  return parsedSession;
};

export default parseFields;

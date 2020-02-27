const links = ['analysis', 'visualization', 'news', 'help'];

const defineLinks = (tasks) => {
  if (Object.keys(tasks).length > 0) {
    return ['tasks', ...links];
  }
  return links;
};

export default defineLinks;

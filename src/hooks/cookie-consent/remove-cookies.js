const revokeConsent = () => {
  window[`ga-disable-${process.env.REACT_APP_GOOGLE_ANALYTICS}`] = true;
  const host = window.location.hostname;
  document.cookie = `_ga=; domain=.${host}; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
  document.cookie = `_gat=; domain=.${host}; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
  document.cookie = `_gid=; domain=.${host}; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
};

export default revokeConsent;

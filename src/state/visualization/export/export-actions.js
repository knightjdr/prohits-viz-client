export const CLEAR_EXPORT_IMAGE = 'CLEAR_EXPORT_IMAGE';
export const DOWNLOAD_EXPORT_IMAGE = 'DOWNLOAD_EXPORT_IMAGE';
export const EXPORT_ERROR = 'EXPORT_ERROR';
export const EXPORT_FORMAT = 'EXPORT_FORMAT';
export const EXPORT_IMAGE = 'EXPORT_IMAGE';

export const clearExportImage = () => ({
  type: CLEAR_EXPORT_IMAGE,
});

export const downloadExportImage = (file) => ({
  file,
  type: DOWNLOAD_EXPORT_IMAGE,
});

export const exportError = () => ({
  type: EXPORT_ERROR,
});

export const exportImage = () => ({
  type: EXPORT_IMAGE,
});

export const setExportFormat = (format) => ({
  format,
  type: EXPORT_FORMAT,
});

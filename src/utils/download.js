const download = (content, filename) => {
  const link = document.createElement('a');
  const file = new Blob([content]);
  link.href = URL.createObjectURL(file);
  link.download = filename;
  link.setAttribute('type', 'hidden');
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(file);
};

export default download;

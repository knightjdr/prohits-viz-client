const getLabelsToShow = (labels, searchLabels, selectedLabels) => {
  const labelsToShow = [];
  labels.forEach((label) => {
    if (searchLabels[label.string]) {
      labelsToShow.push({
        ...label,
        style: { fontWeight: 'bold' },
      });
    } else if (selectedLabels[label.string]) {
      labelsToShow.push(label);
    }
  });
  return labelsToShow;
};

export default getLabelsToShow;

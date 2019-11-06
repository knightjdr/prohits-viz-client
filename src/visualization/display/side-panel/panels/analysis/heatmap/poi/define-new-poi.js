const defineNewPOI = (source, currentPOI, highlightedPOI) => (
  source === 'unselected'
    ? [...currentPOI, ...highlightedPOI]
    : currentPOI.filter(poi => !highlightedPOI.includes(poi))
);

export default defineNewPOI;

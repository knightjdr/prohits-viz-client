import { fillSnapshotAnnotations } from '../../../../../../defaults/heatmap/annotations';
import { fillSnapshotDimensions } from '../../../../../../defaults/heatmap/dimensions';
import { fillSnapshotDisplay } from '../../../../../../defaults/heatmap/display';
import { fillSnapshotMarkers } from '../../../../../../defaults/heatmap/markers';
import { fillSnapshotMinimap } from '../../../../../../defaults/heatmap/minimap';
import { fillSnapshotPOI } from '../../../../../../defaults/heatmap/poi';
import { fillSnapshotPosition } from '../../../../../../defaults/heatmap/position';
import { fillSnapshotSearchStatus } from '../../../../../../defaults/heatmap/search-status';
import { fillSnapshotSettings } from '../../../../../../defaults/heatmap/settings';

const fillColumns = (order) => ({
  defaultOrder: [...order],
  deleted: [],
  order: [...order],
  ref: null,
});

const fillRows = (order) => ({
  defaultOrder: [...order],
  deleted: [],
  direction: null,
  order: [...order],
  sortBy: null,
});

const fillSnapshot = (snapshotState, order) => ({
  annotations: fillSnapshotAnnotations(snapshotState.annotations),
  columns: fillColumns(order.columns),
  dimensions: fillSnapshotDimensions({}),
  display: fillSnapshotDisplay(snapshotState.display),
  markers: fillSnapshotMarkers(snapshotState.markers),
  minimap: fillSnapshotMinimap({ needSyncing: true }),
  poi: fillSnapshotPOI({}),
  position: fillSnapshotPosition({}),
  rows: fillRows(order.rows),
  searchStatus: fillSnapshotSearchStatus({}),
  settings: fillSnapshotSettings(snapshotState.settings),
});

export default fillSnapshot;

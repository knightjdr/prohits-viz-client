import isObject from '../../../utils/is-object';

export const defaultState = {
  all_results: false,
  background: '',
  domain_scope: 'annotated',
  measure_underrepresentation: false,
  no_iea: false,
  numeric_ns: 'ENTREZGENE',
  ordered: false,
  organism: 'hsapiens',
  significance_threshold_method: 'g_SCS',
  user_threshold: 0.01,
  CORUM: true,
  GO: true,
  'GO:BP': true,
  'GO:CC': true,
  'GO:MF': true,
  HP: true,
  HPA: true,
  KEGG: true,
  MIRNA: true,
  REAC: true,
  TF: true,
  WP: true,
};

const fillGprofiler = (fileGprofiler) => {
  if (!fileGprofiler || !isObject(fileGprofiler) || Object.keys(fileGprofiler).length === 0) {
    return { ...defaultState };
  }

  return Object.entries(defaultState).reduce((accum, [key, value]) => ({
    ...accum,
    [key]: fileGprofiler[key] !== undefined ? fileGprofiler[key] : value,
  }), {});
};

export default fillGprofiler;

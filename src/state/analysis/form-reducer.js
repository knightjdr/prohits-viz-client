import * as actions from './form-actions';

export const defaultState = {
  abundance: '',
  condition: '',
  errors: {},
  files: [
    new File(
      ['Bait\tPrey\tPreyGene\tSpec\tSpecSum\tAvgSpec\tNumReplicates\t'
      + 'ctrlCounts\tAvgP\tMaxP\tTopoAvgP\tTopoMaxP\tSaintScore\tlogOddsScore\tFoldChange\t'
      + 'BFDR\tUniqueSpec\tUniqueSpecSum\tUniqueAvgSpec\tPreySequenceLength\n'],
      'samplefile.txt',
      { type: 'text/plain' },
    ),
  ],
  readout: '',
  sampleFile: true,
  score: '',
  tool: 'scv',
  uploading: false,

  fileType: 'saint',
  header: [],
  showAdvanced: true,
  step: 7,
};

const reduceAndReset = () => ({ ...defaultState });

const reduceAndSetField = (state, action) => ({
  ...state,
  [action.field]: action.value,
});

const reduceAndSetFields = (state, action) => ({
  ...state,
  ...action.fields,
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.RESET_FORM:
      return reduceAndReset();
    case actions.SET_FORM_FIELD:
      return reduceAndSetField(state, action);
    case actions.SET_FORM_FIELDS:
      return reduceAndSetFields(state, action);
    default:
      return state;
  }
};

export default reducer;

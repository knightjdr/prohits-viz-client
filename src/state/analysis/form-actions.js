export const RESET_FORM = 'RESET_FORM';
export const SET_FORM_FIELD = 'SET_FORM_FIELD';
export const SET_FORM_FIELDS = 'SET_FORM_FIELDS';

export const resetForm = () => ({
  type: RESET_FORM,
});

export const setFormFields = fields => ({
  fields,
  type: SET_FORM_FIELDS,
});

export const setFormField = (field, value) => ({
  field,
  type: SET_FORM_FIELD,
  value,
});

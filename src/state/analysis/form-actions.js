export const SET_FORM_FIELD = 'SET_FORM_FIELD';
export const SET_FORM_FIELDS = 'SET_FORM_FIELDS';

export const setFormFields = fields => ({
  fields,
  type: SET_FORM_FIELDS,
});

export const setFormField = (field, value) => ({
  field,
  type: SET_FORM_FIELD,
  value,
});

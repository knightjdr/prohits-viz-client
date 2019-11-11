import updateSelectedValues, { updateMultipleValue, updateSingleValue } from './update-selected-values';

describe('Update selected value on change', () => {
  describe('can select multiple options', () => {
    it('should append a value when it has not already been selected', () => {
      const currentValues = ['a', 'c'];
      const newValue = 'b';
      const expected = ['a', 'c', 'b'];
      expect(updateMultipleValue(currentValues, newValue)).toEqual(expected);
    });

    it('should remove a value when it has already been selected', () => {
      const currentValues = ['a', 'c'];
      const newValue = 'a';
      const expected = ['c'];
      expect(updateMultipleValue(currentValues, newValue)).toEqual(expected);
    });

    it('should remove a value and return an empty array when the dropdown can be cleared', () => {
      const canClear = true;
      const currentValues = ['a'];
      const newValue = 'a';
      const expected = [];
      expect(updateMultipleValue(currentValues, newValue, canClear)).toEqual(expected);
    });

    it('should not remove a value when it is the only selction and the dropdown cannot be cleared', () => {
      const canClear = false;
      const currentValues = ['a'];
      const newValue = 'a';
      const expected = ['a'];
      expect(updateMultipleValue(currentValues, newValue, canClear)).toEqual(expected);
    });
  });

  describe('can select one option', () => {
    it('should update selected value when it has not already been selected', () => {
      const currentValues = ['a'];
      const newValue = 'b';
      const expected = ['b'];
      expect(updateSingleValue(currentValues, newValue)).toEqual(expected);
    });

    it('should remove a value when it has already been selected and the dropdown can be cleared', () => {
      const canClear = true;
      const currentValues = ['a'];
      const newValue = 'a';
      const expected = [];
      expect(updateSingleValue(currentValues, newValue, canClear)).toEqual(expected);
    });

    it('should not remove a value when it is the only selction and the dropdown cannot be cleared', () => {
      const canClear = false;
      const currentValues = ['a'];
      const newValue = 'a';
      const expected = ['a'];
      expect(updateSingleValue(currentValues, newValue, canClear)).toEqual(expected);
    });

    it('should not remove a value no values have currently been selected', () => {
      const canClear = false;
      const currentValues = null;
      const newValue = 'a';
      const expected = ['a'];
      expect(updateSingleValue(currentValues, newValue, canClear)).toEqual(expected);
    });
  });

  describe('wrapper for handling changes', () => {
    it('should update a multi-select dropdown', () => {
      const currentValues = ['a', 'c'];
      const newValue = 'b';
      const options = {
        multiple: true,
      };
      const expected = ['a', 'c', 'b'];
      expect(updateSelectedValues(currentValues, newValue, options)).toEqual(expected);
    });

    it('should update a single-select dropdwon', () => {
      const currentValues = ['a'];
      const newValue = 'b';
      const options = {
        multiple: false,
      };
      const expected = ['b'];
      expect(updateSingleValue(currentValues, newValue, options)).toEqual(expected);
    });
  });
});

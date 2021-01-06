import getHighlightedAttribute from './get-highlighted-attribute';

const select = document.createElement('select');
select.multiple = true;
const option1 = document.createElement('option');
option1.selected = true;
option1.text = 'a';
option1.value = '1';
const option2 = document.createElement('option');
option2.text = 'b';
option2.value = '2';
const option3 = document.createElement('option');
option3.selected = true;
option3.text = 'c';
option3.value = '3';
select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);

describe('Get highlighted option attributes', () => {
  it('should return selected option values as integers', () => {
    const expected = [1, 3];
    expect(getHighlightedAttribute(select)).toEqual(expected);
  });

  it('should return selected option text', () => {
    const expected = ['a', 'c'];
    expect(getHighlightedAttribute(select, 'text')).toEqual(expected);
  });
});

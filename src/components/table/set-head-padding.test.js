import setHeadPadding from './set-head-padding';

const tableHeader = {
  style: {
    setProperty: jest.fn(),
  },
};

describe('Set table head padding', () => {
  it('should not add padding when the table body has no scrollbar', () => {
    tableHeader.style.setProperty.mockClear();
    const tableBody = {
      clientWidth: 100,
      offsetWidth: 100,
    };
    setHeadPadding(tableBody, tableHeader);
    expect(tableHeader.style.setProperty).toHaveBeenCalledWith('paddingRight', '0');
  });

  it('should add padding when the table body has a scrollbar', () => {
    tableHeader.style.setProperty.mockClear();
    const tableBody = {
      clientWidth: 100,
      offsetWidth: 115,
    };
    setHeadPadding(tableBody, tableHeader);
    expect(tableHeader.style.setProperty).toHaveBeenCalledWith('paddingRight', '15px');
  });
});

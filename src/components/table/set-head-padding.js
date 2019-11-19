const setHeadPadding = (tableBody, tableHeader) => {
  const { clientWidth, offsetWidth } = tableBody;
  const scrollBarWidth = offsetWidth - clientWidth;
  if (scrollBarWidth > 0) {
    tableHeader.style.setProperty('paddingRight', `${scrollBarWidth}px`);
  } else {
    tableHeader.style.setProperty('paddingRight', '0');
  }
};

export default setHeadPadding;

const setHeadPadding = (tableBody, tableHeader) => {
  const bodyWidth = tableBody.offsetWidth;
  const parentWidth = tableBody.parentNode.offsetWidth;
  const scrollBarWidth = parentWidth - bodyWidth;
  if (scrollBarWidth > 0) {
    tableHeader.style.setProperty('padding-right', `${scrollBarWidth}px`);
  } else {
    tableHeader.style.setProperty('padding-right', '0');
  }
};

export default setHeadPadding;

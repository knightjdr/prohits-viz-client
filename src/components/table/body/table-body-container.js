import React, { forwardRef, useState } from 'react';

import TableBody from './table-body';

const TableBodyContainer = forwardRef((
  {
    ...props
  },
  ref,
) => {
  const [tooltip, setTooltip] = useState({ show: false });

  const handleMouseOut = () => {
    setTooltip({ show: false });
  };

  const handleMouseOver = (e) => {
    const { overflow } = e.target.dataset;
    if (overflow === 'true') {
      const content = e.target.innerText;
      const { left, top } = e.target.getBoundingClientRect();
      setTooltip({
        content,
        show: true,
        x: left,
        y: top,
      });
    } else {
      setTooltip({ show: false });
    }
  };

  return (
    <TableBody
      handleMouseOut={handleMouseOut}
      handleMouseOver={handleMouseOver}
      ref={ref}
      tooltip={tooltip}
      {...props}
    />
  );
});

TableBodyContainer.displayName = 'TableBodyContainer';

export default TableBodyContainer;

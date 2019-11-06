import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import './select.css';

const Select = forwardRef((
  {
    handleContextMenu,
    options,
    selectedType,
    title,
    type,
  },
  ref,
) => (
  <div className="poi__select">
    <h2>{title}</h2>
    <select
      data-context-type={type}
      data-selection-type={selectedType}
      multiple
      onContextMenu={handleContextMenu}
      ref={ref}
    >
      {
        options.map(item => (
          <option
            key={item.name}
            value={item.index}
          >
            {item.name}
          </option>
        ))
      }
    </select>
  </div>
));

Select.propTypes = {
  handleContextMenu: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  selectedType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Select;

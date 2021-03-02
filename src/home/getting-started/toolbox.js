import PropTypes from 'prop-types';
import React from 'react';

import Link from '../../components/link/text/link';

import './toolbox.css';

const ToolBox = ({
  image,
  link,
  text,
  title,
}) => (
  <Link
    className="toolbox"
    to={link}
    visited={false}
  >
    <div className="toolbox__title">
      <div className="toolbox__image">
        {image}
      </div>
      <h4>{title}</h4>
    </div>
    <div className="toolbox__description">
      <p>{text}</p>
    </div>
  </Link>
);

ToolBox.propTypes = {
  image: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ToolBox;

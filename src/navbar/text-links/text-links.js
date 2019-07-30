import PropTypes from 'prop-types';
import React from 'react';

import UL from './text-links-style';

const TextLinks = ({
  links,
  route,
}) => (
  <UL>
    { links.map(link => (
      <li className={route === link ? 'nav__link_active' : 'nav__link'} key={link}>
        <a href={`/${link}`}>{link}</a>
      </li>
    ))}
  </UL>
);

TextLinks.defaultProps = {
  links: [],
  route: '',
};

TextLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string),
  route: PropTypes.string,
};

export default TextLinks;

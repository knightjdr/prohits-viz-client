import PropTypes from 'prop-types';
import React from 'react';

import Link from '../../components/link/text/link';
import UL from './text-links-style';

const TextLinks = ({
  links,
  route,
}) => (
  <UL>
    { links.map((link) => (
      <li className={route === link ? 'nav__link_active' : null} key={link}>
        <Link
          className="nav__link"
          href={`/${link}`}
          visited={false}
        >
          {link}
        </Link>
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

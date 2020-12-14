import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/pro-solid-svg-icons';

import Link from '../../components/link/text/link';
import Div from './menu-style';

const Menu = forwardRef((
  {
    links,
    open,
    route,
    toggleMenu,
  },
  ref,
) => (
  <Div route={route}>
    <button
      aria-label="navigation menu"
      onClick={toggleMenu}
      type="button"
    >
      <FontAwesomeIcon
        className="nav__menu"
        icon={faBars}
        size="lg"
      />
    </button>
    <ul
      ref={ref}
      style={{ transform: open ? 'scale(1)' : 'scale(0)' }}
    >
      {
        links.map((link) => (
          <li key={link}>
            <Link
              className="nav__link"
              href={`/${link}`}
              visited={false}
            >
              {link}
            </Link>
          </li>
        ))
      }
    </ul>
  </Div>
));

Menu.defaultProps = {
  links: [],
  open: false,
};

Menu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string),
  open: PropTypes.bool,
  route: PropTypes.string.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default Menu;

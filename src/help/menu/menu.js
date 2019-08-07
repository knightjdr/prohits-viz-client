import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { faBars } from '@fortawesome/pro-solid-svg-icons';

import IconButton from '../../components/buttons/icon/button';
import links from '../links';

import './menu.css';

const Menu = ({
  isOpen,
  route,
  toggleMenu,
}) => (
  <nav
    aria-label="help navigation menu"
    className={isOpen ? 'help__menu open' : 'help__menu closed'}
  >
    <div className="help__menu-inner">
      <div className="help__menu-scroll-content">
        {
          links.map(link => (
            <Fragment key={link.route}>
              <h2>
                <a
                  className={route === link.route ? 'active' : 'inactive'}
                  href={link.route}
                >
                  {link.text}
                </a>
              </h2>
              {
                link.children
                && link.children.map(childLink => (
                  <h3
                    className="help__menu-links_indent"
                    key={childLink.route}
                  >
                    <a
                      className={route === childLink.route ? 'active' : 'inactive'}
                      href={childLink.route}
                    >
                      {childLink.text}
                    </a>
                  </h3>
                ))
              }
            </Fragment>
          ))
        }
      </div>
    </div>
    <IconButton
      aria-label="toggle help navigation menu"
      className="help__menu-toggle"
      kind="transparent"
      onClick={toggleMenu}
      icon={faBars}
      type="button"
    />
  </nav>
);

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  route: PropTypes.string.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default Menu;

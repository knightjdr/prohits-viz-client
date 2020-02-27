import PropTypes from 'prop-types';
import React from 'react';

import Link from '../components/link/text/link';
import Menu from './menu/menu-container';
import Nav from './navbar-style';
import TextLinks from './text-links/text-links';


const Navbar = ({
  links,
  route,
  smallScreen,
}) => {
  const iconColor = route === 'home' ? '#eee' : '#AC867C';
  return (
    <Nav route={route}>
      <Link
        className="nav__icon"
        href="/"
        visited={false}
      >
        <svg
          aria-label="ProHits-viz icon"
          height={30}
          role="img"
          viewBox="0 0 252.072 248.163"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>ProHits-viz</title>
          <desc>icon</desc>
          <linearGradient
            id="SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1="75.4634"
            y1="184.9697"
            x2="75.4634"
            y2="-15.0835"
            gradientTransform="matrix(0.8634 -0.5044 0.6326 1.0828 -55.1724 54.1383)"
          >
            <stop offset="0.386" style={{ stopColor: iconColor }} />
            <stop offset="1" style={{ stopColor: iconColor, stopOpacity: 0 }} />
          </linearGradient>
          <polygon fill="url(#SVGID_1_)" points="101.026,231.381 0,0 152.898,201.226 " />
          <circle fill={iconColor} cx="128.036" cy="218.163" r="30" />
          <linearGradient
            id="SVGID_2_"
            gradientUnits="userSpaceOnUse"
            x1="96.6611"
            y1="176.5947"
            x2="96.6611"
            y2="-23.4688"
            gradientTransform="matrix(0.8686 0.4955 -0.6214 1.0892 153.9728 -22.0796)"
          >
            <stop offset="0.386" style={{ stopColor: iconColor }} />
            <stop offset="1" style={{ stopColor: iconColor, stopOpacity: 0 }} />
          </linearGradient>
          <polygon fill="url(#SVGID_2_)" points="102.204,203.182 252.072,0 154.256,233.027" />
        </svg>
      </Link>
      <div className="nav__right">
        {
          smallScreen
            ? <Menu links={links} route={route} />
            : <TextLinks links={links} route={route} />
        }
      </div>
    </Nav>
  );
};

Navbar.defaultProps = {
  smallScreen: false,
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  route: PropTypes.string.isRequired,
  smallScreen: PropTypes.bool,
};

export default Navbar;

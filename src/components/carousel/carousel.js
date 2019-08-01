import nanoid from 'nanoid';
import PropTypes from 'prop-types';
import React from 'react';
import { faAngleLeft, faAngleRight } from '@fortawesome/pro-solid-svg-icons';

import IconButton from '../buttons/icon/button';
import StyledCarousel from './carousel-style';

const Carousel = ({
  activeAnimation,
  activeIndex,
  animationDuration,
  children,
  nextItem,
  previousItem,
  setIndex,
}) => (
  <StyledCarousel animationDuration={animationDuration}>
    <div className="carousel__slider">
      <div
        className="carousel__slider-active"
        style={{ animationName: activeAnimation }}
      >
        {children[activeIndex]}
      </div>
    </div>
    <div className="carousel__buttons">
      <IconButton
        aria-label="previous carousel item"
        onClick={previousItem}
        icon={faAngleLeft}
      />
      {
        children.map((child, index) => (
          <button
            aria-label={`jump to carousel item ${index + 1}`}
            className={`carousel__grid-button ${index === activeIndex ? 'active' : 'inactive'}`}
            data-index={index}
            key={nanoid()}
            onClick={setIndex}
            type="button"
          />
        ))
      }
      <IconButton
        aria-label="next carousel item"
        onClick={nextItem}
        icon={faAngleRight}
      />
    </div>
  </StyledCarousel>
);

Carousel.propTypes = {
  activeAnimation: PropTypes.string.isRequired,
  activeIndex: PropTypes.number.isRequired,
  animationDuration: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(
    PropTypes.node,
  ).isRequired,
  nextItem: PropTypes.func.isRequired,
  previousItem: PropTypes.func.isRequired,
  setIndex: PropTypes.func.isRequired,
};

export default Carousel;

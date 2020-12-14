import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Carousel from './carousel';

const resetAnimation = (setState, duration) => {
  setTimeout(() => {
    setState('');
  }, duration);
};

let updating = false;

const CarouselContainer = ({
  animationDuration,
  children,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeAnimation, setActiveAnimation] = useState('');

  const updateWrapper = (func) => {
    if (!updating) {
      updating = true;
      func();
      setTimeout(() => { updating = false; }, animationDuration);
    }
  };

  const updateState = (newIndex, currIndex, direction) => {
    setActiveIndex(newIndex);
    setActiveAnimation(`slideActive${direction}`);
    resetAnimation(setActiveAnimation, animationDuration);
  };

  const nextItem = () => {
    updateWrapper(() => {
      const newIndex = activeIndex === children.length - 1 ? 0 : activeIndex + 1;
      updateState(newIndex, activeIndex, 'Right');
    });
  };

  const previousItem = () => {
    updateWrapper(() => {
      const newIndex = activeIndex === 0 ? children.length - 1 : activeIndex - 1;
      updateState(newIndex, activeIndex, 'Left');
    });
  };

  const setIndex = (e) => {
    updateWrapper(() => {
      const newIndex = Number(e.target.dataset.index);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
        const direction = newIndex > activeIndex ? 'Right' : 'Left';
        updateState(newIndex, activeIndex, direction);
      }
    });
  };

  const carouselElements = children.map((child) => ({
    element: child,
    key: nanoid(),
  }));

  return (
    <Carousel
      activeAnimation={activeAnimation}
      activeIndex={activeIndex}
      animationDuration={animationDuration}
      nextItem={nextItem}
      previousItem={previousItem}
      setIndex={setIndex}
    >
      {carouselElements}
    </Carousel>
  );
};

CarouselContainer.defaultProps = {
  animationDuration: 1000,
};

CarouselContainer.propTypes = {
  animationDuration: PropTypes.number,
  children: PropTypes.arrayOf(
    PropTypes.node,
  ).isRequired,
};

export default CarouselContainer;

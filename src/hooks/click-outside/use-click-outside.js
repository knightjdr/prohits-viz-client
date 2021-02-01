import { useEffect } from 'react';
import isVisible from './is-visible';

const defaultOptions = { esc: true, ignoreVisibility: false, deps: [] };

/* Detect click outside element specified by ref.current. If the visibility
** of the element is irrelevant, set ignoreVisibility argument to true. The
** element is considered visible if it has height or width as computed with
** getBoundingClientRect(). If esc argument is true, pressing the escape
** key is the same as clicking outside the element. func is called when
** a click occurs outside the element. */
const useClickOutside = (ref, func, options = {}) => {
  const { esc, ignoreVisibility, deps } = { ...defaultOptions, ...options };

  const clickedOutside = (isOutside, e) => {
    if (isOutside) {
      func(e);
    }
  };

  const clickListener = (e) => {
    const element = ref.current;
    if (element) {
      const outside = !element.contains(e.target) && (ignoreVisibility || isVisible(element));
      clickedOutside(outside, e);
    }
  };

  const escListener = (e) => {
    const element = ref.current;
    if (e.key === 'Escape' && isVisible(element)) {
      clickedOutside(true, e);
    }
  };

  useEffect(() => {
    window.addEventListener('click', clickListener);
    if (esc) {
      window.addEventListener('keydown', escListener);
    }
    return () => {
      window.removeEventListener('click', clickListener);
      if (esc) {
        window.removeEventListener('keydown', escListener);
      }
    };
  }, deps);

  const clear = () => {
    window.removeEventListener('click', clickListener);
    if (esc) {
      window.removeEventListener('keydown', escListener);
    }
  };

  return clear;
};

export default useClickOutside;

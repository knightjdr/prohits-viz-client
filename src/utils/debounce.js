/* Returns a function, that, as long as it continues to be invoked, will not
** be triggered. The function will be called after it stops being called for
** 'wait' milliseconds. If 'immediate' is passed, trigger the function on the
** leading edge, instead of the trailing. */

function debounce(func, wait, immediate) {
  let timeout;
  return function debounced(...args) {
    const context = this;
    const later = function delayedFunc() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
}

export default debounce;

const pressedKeyCode = (e, key) => {
  if (!e) {
    return false;
  }
  const { keyCode, which } = e;
  return keyCode === key || which === key;
};

export const pressedArrowDown = (e) => (
  pressedKeyCode(e, 40)
);

export const pressedArrowUp = (e) => (
  pressedKeyCode(e, 38)
);

export const pressedBackspace = (e) => (
  pressedKeyCode(e, 8)
);

export const pressedEnd = (e) => (
  pressedKeyCode(e, 35)
);

export const pressedEnter = (e) => (
  pressedKeyCode(e, 13)
);

export const pressedEscape = (e) => (
  pressedKeyCode(e, 27)
);

export const pressedHome = (e) => (
  pressedKeyCode(e, 36)
);

export const pressedSpace = (e) => (
  pressedKeyCode(e, 32)
);

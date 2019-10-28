import calculateDropdownLayout,
{
  calculateAvailableHeight,
  calculateDistanceToViewportBottom,
  defineDirectionToOpen,
  defineDropdownPosition,
} from './calculate-dropdown-layout';

describe('Calculate dropdown layout', () => {
  describe('calculate available height', () => {
    it('should return distance to bottom (minus padding) for "down" direction', () => {
      const direction = 'down';
      const distanceToBottom = 250;
      const expected = 235;
      expect(calculateAvailableHeight(direction, distanceToBottom)).toBe(expected);
    });

    it('should return distance to top (minus padding) for "up" direction', () => {
      const direction = 'up';
      const distanceToBottom = 250;
      const rect = { top: 400 };
      const expected = 385;
      expect(calculateAvailableHeight(direction, distanceToBottom, rect.top)).toBe(expected);
    });
  });

  describe('distance to viewport bottom', () => {
    it('should calculate distance', () => {
      // JSDOM height is 768;
      const rect = { bottom: 500 };
      const expected = 268;
      expect(calculateDistanceToViewportBottom(rect.bottom)).toBe(expected);
    });
  });

  describe('define direction to open dropdown', () => {
    describe('when direction is explicity set', () => {
      it('should open "up"', () => {
        const directionToOpen = 'up';
        const expected = 'up';
        expect(defineDirectionToOpen(directionToOpen)).toBe(expected);
      });

      it('should open "down"', () => {
        const directionToOpen = 'down';
        const expected = 'down';
        expect(defineDirectionToOpen(directionToOpen)).toBe(expected);
      });
    });

    describe('when direction is not explicity set', () => {
      it('should open "down" when distance to bottom is greater than distance to top', () => {
        const distanceToBottom = 300;
        const rect = { top: 299 };
        const expected = 'down';
        expect(defineDirectionToOpen('', distanceToBottom, rect.top)).toBe(expected);
      });

      it('should open "up" when distance to bottom is less than distance to top', () => {
        const distanceToBottom = 298;
        const rect = { top: 299 };
        const expected = 'up';
        expect(defineDirectionToOpen('', distanceToBottom, rect.top)).toBe(expected);
      });
    });
  });

  describe('dropdown position', () => {
    describe('when opening "up"', () => {
      const direction = 'up';
      const distanceToBottom = 500;
      const rect = {
        height: 300,
        left: 220,
      };
      const expected = {
        left: 220,
        bottom: 805,
        transformOrigin: 'center bottom',
      };
      expect(defineDropdownPosition(direction, distanceToBottom, rect)).toEqual(expected);
    });

    describe('when opening "down"', () => {
      const direction = 'down';
      const distanceToBottom = undefined;
      const rect = {
        bottom: 600,
        height: 300,
        left: 220,
      };
      const expected = {
        left: 220,
        top: 605,
        transformOrigin: 'center top',
      };
      expect(defineDropdownPosition(direction, distanceToBottom, rect)).toEqual(expected);
    });
  });

  describe('calculate full layout', () => {
    it('should return complete layout when there is enough space', () => {
      const directionToOpen = 'down';
      const dropdownHeight = 200;
      const ref = {
        getBoundingClientRect: () => ({
          bottom: 500,
          left: 200,
          width: 300,
        }),
      };
      const expected = {
        direction: 'down',
        height: 200,
        left: 200,
        top: 505,
        transformOrigin: 'center top',
        width: 300,
      };
      expect(calculateDropdownLayout(ref, dropdownHeight, directionToOpen)).toEqual(expected);
    });

    it('should return complete layout when there is not enough space for completely displaying dropdown', () => {
      const directionToOpen = 'down';
      const dropdownHeight = 200;
      const ref = {
        getBoundingClientRect: () => ({
          bottom: 600,
          left: 200,
          width: 300,
        }),
      };
      const expected = {
        direction: 'down',
        height: 153,
        left: 200,
        top: 605,
        transformOrigin: 'center top',
        width: 300,
      };
      expect(calculateDropdownLayout(ref, dropdownHeight, directionToOpen)).toEqual(expected);
    });
  });
});

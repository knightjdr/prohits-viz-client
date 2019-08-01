import convertIsoDate, { twelveHour } from './convert-iso-date';

describe('Convert time to am/pm', () => {
  describe('am times', () => {
    it('should convert 0 to 12am', () => {
      const date = new Date('2018-03-12T04:56:00.000Z');
      expect(twelveHour(date)).toBe('12:56 am');
    });

    it('should convert 11.59 am', () => {
      const date = new Date('2018-03-12T15:59:59.000Z');
      expect(twelveHour(date)).toBe('11:59 am');
    });

    it('should convert 12 to pm', () => {
      const date = new Date('2018-03-12T16:00:00.000Z');
      expect(twelveHour(date)).toBe('12:00 pm');
    });

    it('should convert 11.59 pm', () => {
      const date = new Date('2018-03-12T03:59:00.000Z');
      expect(twelveHour(date)).toBe('11:59 pm');
    });
  });
});

describe('Convert ISO date', () => {
  const isoDate = '2018-03-12T16:56:16.000Z';

  it('should convert date to month, day, year', () => {
    expect(convertIsoDate(isoDate)).toBe('Mar 12, 2018');
  });

  it('should convert date to time, month, day, year', () => {
    expect(convertIsoDate(isoDate, true)).toBe('12:56 pm, Mar 12, 2018');
  });
});


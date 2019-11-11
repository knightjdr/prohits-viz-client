import defineScoreCriterion from './define-score-criterion';

describe('Define score criterion', () => {
  describe('greater scores better', () => {
    let isPassingScore;

    beforeAll(() => {
      const scoreType = 'gte';
      const primaryFilter = 0.5;
      isPassingScore = defineScoreCriterion(scoreType, primaryFilter);
    });

    it('should return true for undefined', () => {
      expect(isPassingScore(undefined)).toBeTruthy();
    });

    it('should return true when score is = filter', () => {
      expect(isPassingScore(0.5)).toBeTruthy();
    });

    it('should return true when score is > filter', () => {
      expect(isPassingScore(0.51)).toBeTruthy();
    });

    it('should return false when score is < filter', () => {
      expect(isPassingScore(0.49)).toBeFalsy();
    });
  });

  describe('smaller scores better', () => {
    let isPassingScore;

    beforeAll(() => {
      const scoreType = 'lte';
      const primaryFilter = 0.5;
      isPassingScore = defineScoreCriterion(scoreType, primaryFilter);
    });

    it('should return true for undefined', () => {
      expect(isPassingScore(undefined)).toBeTruthy();
    });

    it('should return true when score is = filter', () => {
      expect(isPassingScore(0.5)).toBeTruthy();
    });

    it('should return true when score is < filter', () => {
      expect(isPassingScore(0.49)).toBeTruthy();
    });

    it('should return false when score is > filter', () => {
      expect(isPassingScore(0.51)).toBeFalsy();
    });
  });
});

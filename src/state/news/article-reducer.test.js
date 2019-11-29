import articleReducer, { defaultState } from './article-reducer';
import * as actions from './article-actions';

describe('Article reducer', () => {
  it('should return the initial state', () => {
    const action = {};
    const expectedState = defaultState;
    expect(articleReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle GET_ARTICLE action', () => {
    const action = {
      id: 'id',
      type: actions.GET_ARTICLE,
    };
    const expectedState = {
      details: {},
      error: false,
      id: 'id',
    };
    expect(articleReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle FILL_ARTICLE action', () => {
    const action = {
      details: { headline: 'headline' },
      id: 'id',
      type: actions.FILL_ARTICLE,
    };
    const expectedState = {
      details: { headline: 'headline' },
      error: false,
      id: 'id',
    };
    expect(articleReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle ARTICLE_ERROR action', () => {
    const action = {
      id: 'id',
      type: actions.ARTICLE_ERROR,
    };
    const expectedState = {
      details: {},
      error: true,
      id: 'id',
    };
    expect(articleReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle missing action', () => {
    const action = {
      data: { headline: 'headline' },
      type: null,
    };
    const expectedState = defaultState;
    expect(articleReducer(undefined, action)).toEqual(expectedState);
  });
});

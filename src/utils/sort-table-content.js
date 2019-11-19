import * as sort from './sort';

export const sortByNumber = (a, b) => sort.sortByNumber(a.content, b.content);

export const sortBySciNotation = (a, b) => sort.sortBySciNotation(a.content, b.content);

export const sortByString = (a, b) => sort.sortByString(a.content, b.content);

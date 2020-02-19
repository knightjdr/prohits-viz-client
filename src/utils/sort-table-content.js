import sort from './sort';

export const numeric = (a, b) => sort.numeric(a.content, b.content);

export const sciNotation = (a, b) => sort.sciNotation(a.content, b.content);

export const character = (a, b) => sort.character(a.content, b.content);

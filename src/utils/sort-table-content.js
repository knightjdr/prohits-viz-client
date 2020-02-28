import sort from './sort';

export const character = (a, b) => sort.character(a.content, b.content);

export const date = (a, b) => sort.date(a.content, b.content);

export const innerText = (a, b) => sort.innerText(a.content, b.content);

export const numeric = (a, b) => sort.numeric(a.content, b.content);

export const sciNotation = (a, b) => sort.sciNotation(a.content, b.content);

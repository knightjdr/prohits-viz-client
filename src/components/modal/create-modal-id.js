import { nanoid } from 'nanoid';

const createModalID = (id) => {
  if (id) {
    return `${id}-${nanoid()}`;
  }
  return `modal-${nanoid()}`;
};

export default createModalID;

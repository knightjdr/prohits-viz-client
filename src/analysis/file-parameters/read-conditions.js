import * as Comlink from 'comlink';

import readCSVColumns from '../../utils/read-csv';
import removeDuplicates from '../../utils/remove-duplicates';
import sort from '../../utils/sort';

const readConditions = {
  data: [],
  async run (conditionColumn, files) {
    const results = await Promise.all([...files.map(async (file) => readCSVColumns(file, conditionColumn))]);
    this.data = removeDuplicates(results.flat());
    this.data.sort(sort.character);
  },
};

export default readConditions;

Comlink.expose(readConditions);

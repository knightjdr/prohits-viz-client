import readCSVColumns from '../../utils/read-csv';
import removeDuplicates from '../../utils/remove-duplicates';
import sort from '../../utils/sort';

const readConditions = async (tool, conditionColumn, files) => {
  if (tool === 'condition-condition' && conditionColumn) {
    const results = await Promise.all([...files.map(async (file) => readCSVColumns(file, conditionColumn))]);
    const conditions = removeDuplicates(results.flat());
    conditions.sort(sort.character);
    return conditions;
  }
  return [];
};

export default readConditions;

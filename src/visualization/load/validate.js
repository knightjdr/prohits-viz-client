import isJSON from '../../utils/is-json';
import isObject from '../../utils/is-object';

const validTypes = ['dotplot', 'heatmap', 'circ-heatmap', 'scatter'];

const validate = (fileContents) => {
  const data = isJSON(fileContents);

  if (!data) {
    return {
      err: true,
      message: 'Invalid file format',
    };
  }

  const {
    columnDB,
    parameters,
    rowDB,
  } = data;

  // The file should have a "parameters" property that is an object.
  if (
    !parameters
    || !isObject(parameters)
  ) {
    return {
      err: true,
      message: 'The JSON object must have a "parameters" property with an object containing analysis parameters',
    };
  }

  // The image type should be specified.
  if (
    !parameters.imageType
    || !validTypes.includes(parameters.imageType)
  ) {
    return {
      err: true,
      message: 'The image type must be specified in the parameters object and be of a supported type',
    };
  }

  // Validate dotplot/heatmaps.
  if (
    parameters.imageType === 'dotplot'
    || parameters.imageType === 'heatmap'
  ) {
    // The file should have a "columnDB" array.
    if (
      !columnDB
      || !Array.isArray(columnDB)
    ) {
      return {
        err: true,
        message: 'The JSON object must have a "columnDB" array',
      };
    }

    // The file should have a "rowDB" array.
    if (
      !rowDB
      || !Array.isArray(rowDB)
    ) {
      return {
        err: true,
        message: 'The JSON object must have a "rowDB" array',
      };
    }

    // The row entries should have "data" and "name" props. Only test first entry.
    if (
      rowDB.length === 0
      || !rowDB[0].data
      || !rowDB[0].name
    ) {
      return {
        err: true,
        message: 'Each "rowDB" entry should have a "data" and "name" property',
      };
    }

    // The row data property should be an array with a "value" property.
    if (
      !Array.isArray(rowDB[0].data)
      || !rowDB[0].data[0].value
    ) {
      return {
        err: true,
        message: 'The row data should be an array with at least a "value" property',
      };
    }
  }

  return {
    err: false,
    data,
  };
};

export default validate;

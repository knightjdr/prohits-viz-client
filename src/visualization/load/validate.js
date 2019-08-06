import isJSON from '../../utils/is-json';

const validTypes = ['dotplot', 'heatmap', 'circ-heatmap', 'scatter'];

const validate = (fileContents) => {
  const json = isJSON(fileContents);

  if (!json) {
    return {
      err: true,
      message: 'Invalid file format',
    };
  }

  const {
    columns,
    parameters,
    plots,
    rows,
  } = json;

  // The file should have a "parameters" key that is an object.
  if (
    !Object.prototype.hasOwnProperty.call(json, 'parameters')
    || Object.prototype.toString.call(json.parameters) !== '[object Object]'
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
    // The file should have a "column" key containing a "names" array.
    if (
      !columns
      || !Object.prototype.hasOwnProperty.call(columns, 'names')
      || !Array.isArray(columns.names)
    ) {
      return {
        err: true,
        message: 'The JSON object must have a "column" property with an array of column names',
      };
    }

    // The file should have a "rows" key with an array list.
    if (
      !rows
      || !Object.prototype.hasOwnProperty.call(rows, 'list')
      || !Array.isArray(rows.list)
    ) {
      return {
        err: true,
        message: 'The JSON object must have a "rows" property with a list of row values',
      };
    }

    // The row entries should have "data" and "name" props.
    if (
      rows.list.length === 0
      || !Object.prototype.hasOwnProperty.call(rows.list[0], 'data')
      || !Object.prototype.hasOwnProperty.call(rows.list[0], 'name')
    ) {
      return {
        err: true,
        message: 'Each "rows" entry should have a "data" and "name" prop',
      };
    }

    // The row data prop should be an array with a "value" key.
    if (
      !Array.isArray(rows.list[0].data)
      || !Object.prototype.hasOwnProperty.call(rows.list[0].data[0], 'value')
    ) {
      return {
        err: true,
        message: 'The row data should be an array with at least a "value" key',
      };
    }
  } else if (parameters.imageType === 'circ-heatmap') {
    // The file should have an "plots" key that is an array.
    if (
      !plots
      || !Array.isArray(plots)
    ) {
      return {
        err: true,
        message: 'The JSON object must have an "plots" property that is an array',
      };
    }

    // The plots entries should have "name", "readouts" and "segments" props.
    if (
      plots.length === 0
      || !Object.prototype.hasOwnProperty.call(plots[0], 'name')
      || !Object.prototype.hasOwnProperty.call(plots[0], 'readouts')
      || !Object.prototype.hasOwnProperty.call(plots[0], 'segments')
    ) {
      return {
        err: true,
        message: 'Each plot entry should have a "name", "readout" and "segment" property',
      };
    }

    // The plots readouts should be an array with at least a "name" prop for each child.
    if (
      !Array.isArray(plots[0].readouts)
      || !Object.prototype.hasOwnProperty.call(plots[0].readouts[0], 'name')
    ) {
      return {
        err: true,
        message: 'Each readout should have a "name" property',
      };
    }

    // The plots segments should be an array with at least a "name" prop for each child.
    if (
      !Array.isArray(plots[0].segments)
      || !Object.prototype.hasOwnProperty.call(plots[0].segments[0], 'name')
    ) {
      return {
        err: true,
        message: 'Each segment should have a "name" property',
      };
    }
  }

  return {
    err: false,
    json,
  };
};

export default validate;

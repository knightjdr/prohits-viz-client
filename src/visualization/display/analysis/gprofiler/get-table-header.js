import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/pro-duotone-svg-icons';

import * as sort from '../../../../utils/sort-table-content';

export const columnDefinitions = {
  header: [
    {
      name: 'Term',
      sort: sort.character,
      sortable: true,
      sortKey: 'term',
      width: '175px',
    },
    {
      name: 'ID',
      sortable: false,
      width: 'minmax(82px, 15%)',
    },
    {
      name: 'Source',
      sort: sort.numeric,
      sortable: true,
      sortKey: 'source',
      width: 'minmax(73px, 10%)',
    },
    {
      name: 'T',
      sort: sort.numeric,
      sortable: true,
      sortKey: 'termSize',
      tooltip: 'Term size',
      width: 'minmax(60px, 10%)',
    },
    {
      name: 'Q',
      sort: sort.numeric,
      sortable: true,
      sortKey: 'querySize',
      tooltip: 'Query size',
      width: 'minmax(60px, 10%)',
    },
    {
      name: 'I',
      sort: sort.numeric,
      sortable: true,
      sortKey: 'intersectionSize',
      tooltip: 'Intersection Q ∩ T',
      width: 'minmax(63px, 10%)',
    },
    {
      name: 'p-value',
      sort: sort.sciNotation,
      sortable: true,
      sortKey: 'pValue',
      width: 'minmax(76px, 15%)',
    },
    {
      name: 'Genes',
      sortable: false,
      width: 'minmax(186px, 1fr)',
    },
  ],
  order: ['term', 'id', 'source', 'termSize', 'querySize', 'intersectionSize', 'pValue', 'genes'],
};

const imageTypesWithActions = {
  dotplot: true,
  heatmap: true,
  scatter: true,
};

const getActionColumnTooltip = (imageType) => {
  if (imageType === 'dotplot' || imageType === 'heatmap') {
    return 'Add annotation';
  } if (imageType === 'scatter') {
    return 'Custom group';
  }
  return '';
};

export const getTableHeader = (imageType) => {
  if (imageTypesWithActions[imageType]) {
    return [
      {
        header: [
          ...columnDefinitions.header,
          {
            name: <FontAwesomeIcon icon={faEdit} />,
            sortable: false,
            tooltip: getActionColumnTooltip(imageType),
            width: 'minmax(70px, 10%)',
          },
        ],
        order: [
          ...columnDefinitions.order,
          'action',
        ],
      },
      845,
    ];
  }
  return [columnDefinitions, 775];
};

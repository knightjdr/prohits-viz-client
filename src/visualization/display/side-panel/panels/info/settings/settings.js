import React from 'react';

import Setting from './setting';

import './settings.css';

const Settings = (params) => {
  // Do not show parameter keys for things in this array.
  const omitKeys = ['filename', 'imageType', 'name', 'taskID', 'xLabel', 'yLabel'];
  // Convert score type value as indicated in this object.
  const scoreType = {
    gte: 'larger scores better',
    lte: 'smaller scores better',
  };
  const sortedKeys = Object.keys(params).sort();
  return (
    <div className="panel__info-settings">
      {
        sortedKeys.map((key) => {
          if (
            !params[key]
            || omitKeys.includes(key)
          ) {
            return null;
          } if (key === 'scoreType') {
            return (
              <Setting
                field={key}
                key={key}
                value={scoreType[params[key]]}
              />
            );
          } if (
            params[key]
            && typeof params[key] === 'boolean'
          ) {
            return (
              <Setting
                field={key}
                key={key}
                value={String(params[key])}
              />
            );
          } if (
            params[key]
            && typeof params[key] === 'string'
          ) {
            return (
              <Setting
                field={key}
                key={key}
                value={params[key]}
              />
            );
          } if (
            params[key]
            && Array.isArray(params[key])
            && params[key].length > 0
          ) {
            const values = params[key].map((value) => (
              <div key={value}>
                {value}
              </div>
            ));
            return (
              <Setting
                field={key}
                key={key}
                value={values}
              />
            );
          }
          return null;
        })
      }
    </div>
  );
};

export default Settings;

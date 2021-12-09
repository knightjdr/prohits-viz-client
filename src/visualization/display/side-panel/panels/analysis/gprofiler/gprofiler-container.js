import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Gprofiler from './gprofiler';

import { selectState } from '../../../../../../state/selector/general';
import {
  changeGprofilerSetting,
  changeGprofilerSettings,
} from '../../../../../../state/visualization/analysis/gprofiler-actions';

const GprofilerContainer = () => {
  const dispatch = useDispatch();
  const [showAdvanced, setShowAdvanced] = useState(false);

  const settings = useSelector((state) => selectState(state, 'gprofiler'));

  const handleChange = (e, id, value) => {
    dispatch(changeGprofilerSetting(id, value));
  };

  const handleGoCheckboxChange = (e, id, value) => {
    const newSettings = value
      ? {
          GO: true,
          'GO:BP': true,
          'GO:CC': true,
          'GO:MF': true,
        }
      : {
          GO: false,
          'GO:BP': false,
          'GO:CC': false,
          'GO:MF': false,
        };
    dispatch(changeGprofilerSettings(newSettings));
  };

  const toggleAdvanced = () => {
    setShowAdvanced(!showAdvanced);
  };

  return (
    <Gprofiler
      handleChange={handleChange}
      handleGoCheckboxChange={handleGoCheckboxChange}
      settings={settings}
      showAdvanced={showAdvanced}
      toggleAdvanced={toggleAdvanced}
    />
  );
};

export default GprofilerContainer;

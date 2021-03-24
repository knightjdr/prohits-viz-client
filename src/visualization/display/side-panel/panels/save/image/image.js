import PropTypes from 'prop-types';
import React from 'react';
import { faSave } from '@fortawesome/pro-duotone-svg-icons';

import ButtonIcon from '../../../../../../components/buttons/icon/button';
import ButtonRectangular from '../../../../../../components/buttons/rectangular/button';
import Message from './message';
import Section from '../../section/section';
import Select from '../../../../../../components/select/select-container';

import './image.css';

const Image = ({
  exporter,
  handleChange,
  handleSave,
  imageType,
}) => (
  <Section
    border={false}
    helpLink="/help/visualization/heatmap#save"
    title="Save Image"
  >
    <div className="panel__save-image">
      {
        imageType === 'dotplot'
        || imageType === 'heatmap'
          ? (
            <>
              <Select
                onChange={handleChange}
                options={[
                  { label: 'SVG', value: 'svg' },
                  { label: 'PNG', value: 'png' },
                ]}
                value={exporter.format}
              />
              <ButtonIcon
                className="panel__save-image-icon-button"
                disabled={exporter.exporting}
                icon={faSave}
                kind="secondary"
                onClick={handleSave}
              />
            </>
          )
          : (
            <ButtonRectangular
              onClick={handleSave}
              kind="secondary"
            >
              Save
            </ButtonRectangular>
          )
      }

    </div>
    <Message exporter={exporter} />
  </Section>
);

Image.defaultProps = {
  exporter: {
    error: false,
    exporting: false,
    message: '',
  },
};

Image.propTypes = {
  exporter: PropTypes.shape({
    exporting: PropTypes.bool,
    format: PropTypes.string,
  }),
  handleChange: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  imageType: PropTypes.string.isRequired,
};

export default Image;

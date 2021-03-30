import PropTypes from 'prop-types';
/* import React, { Fragment } from 'react';
import { faTrash } from '@fortawesome/pro-duotone-svg-icons';
import { faTimes } from '@fortawesome/pro-solid-svg-icons';

import ButtonIcon from '../../../../../../components/buttons/icon/button';
import ColorPicker from '../../../../../../components/color-picker/color-picker-container';
import Section from '../../section/section'; */

import './point-list.css';

const PointList = () => null;

/* const PointList = ({
  customization,
  handleColorChange,
  handleDelete,
  handleDeleteAll,
  handleRadiusChange,
  labelOrder,
}) => (
  <Section title="Customized points">
    <div className="customization__list">
      {
        labelOrder.length === 0
          ? (
            <p>
              Use the selection box above to choose points for customization.
            </p>
          )
          : (
            <>
              <div className="customization__list-header">
                <div>Label</div>
                <div>Colour</div>
                <div>Size</div>
                <div />
              </div>
              <div className="customization__list-content">
                {
                  labelOrder.map((label) => (
                    <Fragment key={label}>
                      <div>{label}</div>
                      <ColorPicker
                        button={(
                          <button
                            aria-label={`${label} color`}
                            className="customization__list-color-indicator"
                            style={{ backgroundColor: customization[label].color }}
                            type="button"
                          />
                        )}
                        color={customization[label].color}
                        id={label}
                        onChange={handleColorChange}
                        placement={['left', 'center']}
                      />
                      <div>
                        <input
                          data-label={label}
                          min={1}
                          onChange={handleRadiusChange}
                          step={1}
                          type="number"
                          value={customization[label].radius}
                        />
                      </div>
                      <div>
                        <ButtonIcon
                          ariaLabel={`Delete ${label}`}
                          className="customization__list-delete-button"
                          data-label={label}
                          icon={faTimes}
                          kind="warning"
                          onClick={handleDelete}
                          size="xs"
                          type="button"
                        />
                      </div>
                    </Fragment>
                  ))
                }
              </div>
              <div className="customization__list-clear">
                <div>
                  Clear all customizations:
                </div>
                <ButtonIcon
                  icon={faTrash}
                  kind="warning"
                  onClick={handleDeleteAll}
                  type="button"
                />
              </div>
            </>
          )
      }
    </div>
  </Section>
); */

PointList.propTypes = {
  customization: PropTypes.shape({}).isRequired,
  handleColorChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleDeleteAll: PropTypes.func.isRequired,
  handleRadiusChange: PropTypes.func.isRequired,
  labelOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PointList;

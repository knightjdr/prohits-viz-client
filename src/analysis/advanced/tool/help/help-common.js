import React from 'react';

import ReadoutLengthNormalization from './images/length-normalization.svg';

import './help.css';

const help = {
  clusteringOptimize: `The leaf order of clusters can be optimized by selecting this option.
    For large datasets (approximately 1000 conditions or readouts), this can significantly slow
    done the analysis.`,
  control: `The average value of a readout across control samples will be subtracted
    from the detected value for the condition if this is selected. The quantitative value
    for the readout becomes the value above and beyond what is seen across the control
    samples. Specify the column to use for controls in the adjacent "Control column"
    field. If you are applying multiple transformations to your data, control subtraction
    will always occur first (before readout length normalization, condition normalization
    and log transformation).`,
  mockConditionAbundance: (
    <div>
      <p>
        Enable this option if for each condition you would like to create an identical readout
        with a simulated abundance value. The simulated abundance will be equal to the highest detected
        readout abundance satisfying the filter cutoffs for the condition in question.
      </p>
      <h2 className="analysis__advanced-help-header">
        Motivation
      </h2>
      <p>
        The protein-protein interaction scoring tool SAINT automatically filters out peptides
        detected for the bait protein (condition) due to quantification artifacts from overexpressing
        the bait. If this option is enabled, the highest detected prey (readout) abundance satisfying
        the filter cutoffs will be used for the bait abundance. The absence of a bait gene
        can negatively affect correlation analysis for smaller clusters making it necessary to
        simulate this value when not available.
      </p>
    </div>
  ),
  normalization: `No normalization is applied by default but data can be normalized by the total
    abundance between conditions or by a specific readout. If you are applying multiple
    transformations to your data, normalization will always occur after control subtraction
    and readout length normalization but before log transformation.`,
  normalizationReadout: `The readout to use for normalization. Enter the readout name exactly
    as is it appears in the input file as this option is case sensitive.`,
  png: `SVG images will always be generated but images in PNG format can also be created if
    this option is selected.`,
  readoutLength: (
    <div>
      The abundance value of each readout can be adjusted to its length (gene/protein length)
      if a column with length is available in the input file. This option should be selected
      if you are worried the length may be unduly affecting the observed abundance. The adjusted
      value of a readout is calculated by dividing the median length of all readouts in the data
      set by the length of readout i and then multiplying by the abundance of readout i.
      <div className="analysis__advanced-field-modal-img analysis__advanced-field-modal-img_padding">
        <img
          alt="Readout length normalization formula"
          height={60}
          src={ReadoutLengthNormalization}
          width={380}
        />
      </div>
      If you are applying multiple transformations to your data, readout length
      normalization will always occur after control subtraction but before condition
      normalization and log transformation.
    </div>
  ),
  scoreType: `The score type defines how the scoring system in the
    input file works, i.e. are smaller scores better that larger scores, or
    vice versa?`,
};

export default help;

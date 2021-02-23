const recommendedColumns = {
  'condition-condition': {
    other: {
      abundance: ['abundance', 'abundances', 'avgspec', 'specsum', 'avgintensity', 'intensitysum'],
      condition: ['condition', 'conditions', 'bait', 'baits'],
      control: ['control', 'controls', 'ctrlcounts'],
      readout: ['readout', 'readouts', 'preygene', 'prey', 'preygenes', 'preys'],
      readoutLength: ['readoutLength', 'readoutLengths', 'preysequencelength'],
      score: ['score', 'scores', 'pvalue', 'p-value', 'confidence', 'bfdr', 'fdr', 'saintscore', 'avgp', 'maxp'],
    },
    saint: {
      abundance: ['avgspec', 'specsum', 'avgintensity', 'intensitysum'],
      condition: ['bait', 'baits'],
      control: ['ctrlcounts', 'control', 'controls'],
      readout: ['preygene', 'prey', 'preygenes', 'preys'],
      readoutLength: ['preysequencelength'],
      score: ['bfdr', 'fdr', 'saintscore', 'avgp', 'maxp'],
    },
  },
  correlation: {
    other: {
      abundance: ['abundance', 'abundances', 'avgspec', 'specsum', 'avgintensity', 'intensitysum'],
      condition: ['condition', 'conditions', 'bait', 'baits'],
      control: ['control', 'controls', 'ctrlcounts'],
      readout: ['readout', 'readouts', 'preygene', 'prey', 'preygenes', 'preys'],
      readoutLength: ['readoutLength', 'readoutLengths', 'preysequencelength'],
      score: ['score', 'scores', 'pvalue', 'p-value', 'confidence', 'bfdr', 'fdr', 'saintscore', 'avgp', 'maxp'],
    },
    saint: {
      abundance: ['spec', 'avgspec', 'specsum', 'avgintensity', 'intensitysum'],
      condition: ['bait', 'baits'],
      control: ['ctrlcounts', 'control', 'controls'],
      readout: ['preygene', 'prey', 'preygenes', 'preys'],
      readoutLength: ['preysequencelength'],
      score: ['bfdr', 'fdr', 'saintscore', 'avgp', 'maxp'],
    },
  },
  dotplot: {
    other: {
      abundance: ['abundance', 'abundances', 'avgspec', 'specsum', 'avgintensity', 'intensitysum'],
      condition: ['condition', 'conditions', 'bait', 'baits'],
      control: ['control', 'controls', 'ctrlcounts'],
      readout: ['readout', 'readouts', 'preygene', 'prey', 'preygenes', 'preys'],
      readoutLength: ['readoutLength', 'readoutLengths', 'preysequencelength'],
      score: ['score', 'scores', 'pvalue', 'p-value', 'confidence', 'bfdr', 'fdr', 'saintscore', 'avgp', 'maxp'],
    },
    saint: {
      abundance: ['avgspec', 'specsum', 'avgintensity', 'intensitysum'],
      condition: ['bait', 'baits'],
      control: ['ctrlcounts', 'control', 'controls'],
      readout: ['preygene', 'prey', 'preygenes', 'preys'],
      readoutLength: ['preysequencelength'],
      score: ['bfdr', 'fdr', 'saintscore', 'avgp', 'maxp'],
    },
  },
  specificity: {
    other: {
      abundance: ['abundance', 'abundances', 'avgspec', 'specsum', 'avgintensity', 'intensitysum'],
      condition: ['condition', 'conditions', 'bait', 'baits'],
      control: ['control', 'controls', 'ctrlcounts'],
      readout: ['readout', 'readouts', 'preygene', 'prey', 'preygenes', 'preys'],
      readoutLength: ['readoutLength', 'readoutLengths', 'preysequencelength'],
      score: ['score', 'scores', 'pvalue', 'p-value', 'confidence', 'bfdr', 'fdr', 'saintscore', 'avgp', 'maxp'],
    },
    saint: {
      abundance: ['avgspec', 'specsum', 'avgintensity', 'intensitysum', 'spec'],
      condition: ['bait', 'baits'],
      control: ['ctrlcounts', 'control', 'controls'],
      readout: ['preygene', 'prey', 'preygenes', 'preys'],
      readoutLength: ['preysequencelength'],
      score: ['bfdr', 'fdr', 'saintscore', 'avgp', 'maxp'],
    },
  },
};

export default recommendedColumns;

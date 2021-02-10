const recommendedColumns = {
  'condition-condition': {
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
    saint: {
      abundance: ['avgspec', 'specsum', 'avgintensity', 'intensitysum'],
      condition: ['bait', 'baits'],
      control: ['ctrlcounts', 'control', 'controls'],
      readout: ['preygene', 'prey', 'preygenes', 'preys'],
      readoutLength: ['preysequencelength'],
      score: ['bfdr', 'fdr', 'saintscore', 'avgp', 'maxp'],
    },
  },
  scv: {
    saint: {
      abundance: ['avgspec', 'foldchange', 'uniquespec', 'avgintensity', 'intensitysum'],
      condition: ['bait', 'baits'],
      control: ['ctrlcounts', 'control', 'controls'],
      readout: ['preygene', 'prey', 'preygenes', 'preys'],
      readoutLength: ['preysequencelength'],
      score: ['bfdr', 'fdr', 'saintscore', 'avgp', 'maxp'],
    },
  },
  specificity: {
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

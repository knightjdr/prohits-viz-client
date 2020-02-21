const recommendedColumns = {
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
};

export default recommendedColumns;

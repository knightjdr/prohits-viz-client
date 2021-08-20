const recommendedColumns = {
  defaults: {
    bagel: {
      abundance: ['bf'],
      condition: ['condition'],
      control: [],
      readout: ['gene'],
      readoutLength: [],
      score: ['fdr'],
    },
    crapome: {
      abundance: ['avgspc', 'avg. spc', 'avgint', 'avg. int'],
      condition: ['bait', 'baitgene'],
      control: ['user controls (spc or intensities)', 'crap controls (spc)', 'crap controls (int)'],
      readout: ['prey', 'preygene'],
      readoutLength: ['preysequencelength'],
      score: ['bfdr', 'fdr', 'sp', 'fca', 'fcb', 'wd', 'is'],
    },
    drugz: {
      abundance: ['normz', 'sumz'],
      condition: ['condition'],
      control: [],
      readout: ['gene'],
      readoutLength: [],
      score: ['fdr_synth', 'fdr_supp', 'pval_synth', 'pval_supp'],
    },
    mageck: {
      abundance: ['beta', 'z', 'neg|lfc', 'pos|lfc'],
      condition: ['condition'],
      control: [],
      readout: ['gene', 'id'],
      readoutLength: [],
      score: ['fdr', 'wald-fdr', 'p-value', 'wald-p-value', 'neg|fdr', 'pos|fdr', 'neg|p-value', 'pos|p-value'],
    },
    other: {
      abundance: ['abundance', 'abundances', 'avgspec', 'specsum', 'avgintensity', 'intensitysum'],
      condition: ['condition', 'conditions', 'bait', 'baits'],
      control: ['control', 'controls', 'ctrlcounts'],
      readout: ['readout', 'readouts', 'preygene', 'prey', 'preygenes', 'preys'],
      readoutLength: ['readoutLength', 'readoutLengths', 'preysequencelength'],
      score: ['score', 'scores', 'pvalue', 'p-value', 'confidence', 'bfdr', 'fdr', 'saintscore', 'avgp', 'maxp'],
    },
    ranks: {
      abundance: ['ranks_score', 'depletion_score', 'enrichment_score'],
      condition: ['condition'],
      control: [],
      readout: ['gene'],
      readoutLength: [],
      score: ['fdr', 'depletion_fdr', 'enrichment_fdr', 'p-value', 'depletion_p-value', 'enrichment_p-value'],
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
  toolSpecific: {
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
  },
};

export default recommendedColumns;

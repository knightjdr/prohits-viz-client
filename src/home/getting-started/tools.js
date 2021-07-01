import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartScatter,
  faFileSpreadsheet,
  faNewspaper,
  faQuestion,
  faTools,
} from '@fortawesome/pro-duotone-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const tools = [
  {
    image: <FontAwesomeIcon icon={faFileSpreadsheet} size="xs" />,
    link: '/analysis',
    text: `With a SAINT, CRAPome or tabular input file in hand, click here to
      begin your analysis.`,
    title: 'Analysis',
  },
  {
    image: <FontAwesomeIcon icon={faChartScatter} size="xs" />,
    link: '/visualization',
    text: `Use our visualization tools if you have already
      run an analysis and generated an interactive image file.`,
    title: 'Visualization',
  },
  {
    image: <FontAwesomeIcon icon={faTools} size="xs" />,
    link: '/utilities',
    text: `Miscellaneous tools for analysis and file processing that generate
      static image outputs or text files.`,
    title: 'Utilities',
  },
  {
    image: <FontAwesomeIcon icon={faNewspaper} size="xs" />,
    link: '/news',
    text: 'Read more about the latest news and features available at ProHits-viz.',
    title: 'News',
  },
  {
    image: <FontAwesomeIcon icon={faYoutube} size="xs" />,
    link: 'https://www.youtube.com/channel/UCGR-0ixL4z526JUVQU8P4xQ',
    text: 'Watch demonstration videos on the latest features and tutorials on using our tools.',
    title: 'Videos',
  },
  {
    image: <FontAwesomeIcon icon={faQuestion} size="xs" swapOpacity />,
    link: '/help',
    text: `New to ProHits-viz or have a question about one of our
      tools? Try our online help.`,
    title: 'Help',
  },
];

export default tools;

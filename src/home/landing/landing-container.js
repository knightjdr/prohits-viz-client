import React from 'react';
import { useSelector } from 'react-redux';

import Landing from './landing';
import { selectStateProperty } from '../../state/selector/general';

const LandingContainer = () => {
  const news = useSelector(state => selectStateProperty(state, 'home', 'news'));

  const article = news && news[0]
    ? {
      headline: news[0].headline,
      link: news[0].headline.replace(/\s/g, '-'),
    }
    : {};

  return (
    <Landing article={article} />
  );
};


export default LandingContainer;

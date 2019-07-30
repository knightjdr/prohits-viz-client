import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/pro-solid-svg-icons'

import LinkButton from '../../components/link/button/link';
import LinkText from '../../components/link/text/link';
import TitleImage from './assets/title.svg';

import './landing.css';

const Landing = ({
  article,
}) => (
  <section className="landing">
    <h1 className="landing__title">
      ProHits-viz
      <img
        alt="ProHits-viz"
        src={TitleImage}
      />
    </h1>
    <h2 className="landing__description">
      A suite of webtools for analyzing and visualizing screens
      and protein-protein interaction data
    </h2>
    <div className="landing__buttons">
      <LinkButton
        href="#getting-started"
        kind="primary"
      >
        Getting started
      </LinkButton>
      <LinkButton
        href="#spotlight"
        kind="primary"
      >
        Spotlight
      </LinkButton>
    </div>
    {
      article.link
      && (
        <div className="landing__news">
          <LinkText
            href={`/news/${article.link}`}
            outline={false}
          >
            <FontAwesomeIcon icon={faNewspaper} />
            {article.headline}
          </LinkText>
        </div>
      )
    }
  </section>
);

Landing.defaultProps = {
  article: {},
};

Landing.propTypes = {
  article: PropTypes.shape({
    headline: PropTypes.string,
    link: PropTypes.string,
  })
};

export default Landing;

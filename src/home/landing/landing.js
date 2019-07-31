import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faVideo } from '@fortawesome/pro-solid-svg-icons';

import LinkButton from '../../components/link/button/link';
import LinkText from '../../components/link/text/link';
import TitleImage from './assets/title.svg';

import './landing.css';

const Landing = ({
  article,
}) => (
  <section className="landing">
    <div className="landing__inner">
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
      <LinkButton
        className="landing__button-demo"
        href="https://www.youtube.com/watch?v=4IVTrixfWpw"
        kind="primary"
        rel="noopener noreferrer"
        shadow
        target="_blank"
      >
        <FontAwesomeIcon icon={faVideo} />
        Demo
      </LinkButton>
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
    </div>
  </section>
);

Landing.defaultProps = {
  article: {},
};

Landing.propTypes = {
  article: PropTypes.shape({
    headline: PropTypes.string,
    link: PropTypes.string,
  }),
};

export default Landing;

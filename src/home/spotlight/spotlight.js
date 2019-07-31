import PropTypes from 'prop-types';
import React from 'react';

import Link from '../../components/link/text/link';

import './spotlight.css';

const Spotlight = ({
  manuscripts,
}) => (
  manuscripts.length > 0
    ? (
      <section className="spotlight">
        <h3>Spotlight</h3>
        <div className="carousel__item">
          <img
            alt={`${manuscripts[0].authorLastName} highlight`}
            height={332}
            src={`./images/${manuscripts[0].image}`}
          />
          <div className="carousel__details">
            <h4>{manuscripts[0].title}</h4>
            <p>
              { `${manuscripts[0].authorLastName} and colleagues used the ${manuscripts[0].tool}
                tool at ProHits-viz to ${manuscripts[0].description}.`
              }
            </p>
            <div className="carousel__links">
              <Link
                href={`https://www.ncbi.nlm.nih.gov/pubmed/${manuscripts[0].pubmed}`}
                outline={false}
              >
                Pubmed
              </Link>
              <Link
                href={manuscripts[0].url}
                outline={false}
              >
                Publisher
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
    : null
);

Spotlight.defaultProps = {
  manuscripts: [],
};

Spotlight.propTypes = {
  manuscripts: PropTypes.arrayOf(
    PropTypes.shape({
      authorLastName: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      pubmed: PropTypes.number,
      title: PropTypes.string,
      tool: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
};

export default Spotlight;

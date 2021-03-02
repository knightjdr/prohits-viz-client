import PropTypes from 'prop-types';
import React from 'react';

import Carousel from '../../components/carousel/carousel-container';
import Link from '../../components/link/text/link';

import './spotlight.css';

const Spotlight = ({
  manuscripts,
}) => (
  manuscripts.length > 0
    ? (
      <section className="spotlight">
        <h3>Spotlight</h3>
        <Carousel>
          {
            manuscripts.map((manuscript) => (
              <div
                className="carousel__item"
                key={manuscript.title}
              >
                <img
                  alt={`${manuscript.authorLastName} highlight`}
                  height={332}
                  src={`./images/${manuscript.image}`}
                />
                <div className="carousel__details">
                  <h4>{manuscript.title}</h4>
                  <p>
                    { `${manuscript.authorLastName} and colleagues used the ${manuscript.tool}
                      tool at ProHits-viz to ${manuscript.description}.`}
                  </p>
                  <div className="carousel__links">
                    <Link
                      to={`https://www.ncbi.nlm.nih.gov/pubmed/${manuscript.pubmed}`}
                      outline={false}
                    >
                      Pubmed
                    </Link>
                    <Link
                      to={manuscript.url}
                      outline={false}
                    >
                      Publisher
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }
        </Carousel>
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

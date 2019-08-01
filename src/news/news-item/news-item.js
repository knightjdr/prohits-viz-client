/* eslint react/no-danger: 0 */

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Tooltip } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import { faNewspaper } from '@fortawesome/pro-regular-svg-icons';

import Loading from '../../components/loading/loading';
import NewsItemSelector from '../../state/selectors/news-item-selector';

import './news-item.css';

export const NewsItemComponent = ({
  newsItem,
}) => {
  let newsItemElement = null;
  if (newsItem.isLoading) {
    newsItemElement = (
      <Loading />
    );
  } else if (newsItem.error) {
    newsItemElement = (
      <Loading
        error
        message="There was an error retrieving this story"
      />
    );
  } else if (newsItem.isLoaded) {
    const newsButtons = (
      <div className="news__item-navbutton-container">
        <Tooltip
          placement="right"
          title="News archive"
        >
          <NavLink
            className="news__item-navlink"
            to="/news"
          >
            <Button
              type="primary"
              shape="circle"
            >
              <FontAwesomeIcon
                icon={faNewspaper}
              />
            </Button>
          </NavLink>
        </Tooltip>
        <div className="news__item-share-buttons-title">
          Share
        </div>
        <TwitterShareButton
          className="news__item-share-button"
          hashtags={newsItem.item.hashtags}
          title={newsItem.item.headline}
          url={`${process.env.REACT_APP_HOME_ROOT}/news/${encodeURI(newsItem.item.headline)}`}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <FacebookShareButton
          className="news__item-share-button"
          hashtag={newsItem.item.hashtags[0]}
          quote={newsItem.item.headline}
          url={`${process.env.REACT_APP_HOME_ROOT}/news/${encodeURI(newsItem.item.headline)}`}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <EmailShareButton
          className="news__item-share-button"
          subject={newsItem.item.headline}
          url={`${process.env.REACT_APP_HOME_ROOT}/news/${encodeURI(newsItem.item.headline)}`}
        >
          <EmailIcon size={32} round />
        </EmailShareButton>
      </div>
    );
    newsItemElement = (
      <div className="news__item-content">
        <article className="news__item-story">
          <header className="news__item-headline">
            { newsItem.item.headline }
          </header>
          <time className="news__item-date">
            { newsItem.item.date }
          </time>
          {newsButtons}
          <section
            className="news__item-details"
            dangerouslySetInnerHTML={{ __html: newsItem.item.html }}
          />
        </article>
      </div>
    );
  }
  return (
    <div className="news__item">
      { newsItemElement }
    </div>
  );
};

NewsItemComponent.defaultProps = {
  newsItem: null,
};

NewsItemComponent.propTypes = {
  newsItem: PropTypes.shape({
    error: PropTypes.bool,
    isLoaded: PropTypes.bool,
    isLoading: PropTypes.bool,
    item: PropTypes.shape({
      date: PropTypes.string,
      details: PropTypes.string,
      hashtags: PropTypes.arrayOf(
        PropTypes.string,
      ),
      headline: PropTypes.string,
      _id: PropTypes.string,
    }),
  }),
};

/* istanbul ignore next */

const mapStateToProps = state => ({
  newsItem: NewsItemSelector(state),
});

const ConnectedContainer = connect(
  mapStateToProps,
)(NewsItemComponent);

export default ConnectedContainer;

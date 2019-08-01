import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import FetchNewsItem from '../../state/get/news-item-actions';
import NewsItem from './news-item';

export class NewsItemContainer extends Component {
  componentDidMount = () => {
    this.getNewsItemContent();
  }
  getNewsItemContent = () => {
    const { newsId } = this.props.match.params;
    if (newsId) {
      this.props.fetchNewsItem(newsId);
    }
  }
  render() {
    return (
      <NewsItem />
    );
  }
}

NewsItemContainer.defaultProps = {
  match: {
    params: {
      newsId: null,
    },
  },
};

NewsItemContainer.propTypes = {
  fetchNewsItem: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      newsId: PropTypes.string,
    }),
  }),
};

/* istanbul ignore next */

const mapDispatchToProps = dispatch => ({
  fetchNewsItem: (newsId) => {
    dispatch(FetchNewsItem(newsId));
  },
});

const ConnectedContainer = connect(
  null,
  mapDispatchToProps,
)(NewsItemContainer);

export default ConnectedContainer;

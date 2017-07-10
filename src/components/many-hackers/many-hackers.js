import React from 'react';
import PropTypes from 'prop-types';

import HackerNewsHeadline from '../hacker-news-headline/hacker-news-headline';
import styles from './styles.css';

const ManyHackers = ({ isLoading, headlines, loadMore }) =>
  <div className={styles.root}>
    { headlines && headlines.map((h, i) =>
      <div key={i}>
        <HackerNewsHeadline title={h.title} url={h.url}/>
      </div>
    ) }

    { !isLoading && <button onClick={loadMore}>Load More</button> }
    { isLoading && <div>Loading...</div> }
  </div>;

ManyHackers.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadMore: PropTypes.func.isRequired,
  headlines: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired
};

export default ManyHackers;

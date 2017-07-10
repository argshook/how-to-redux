import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const maxLength = n => str =>
  str.length > n ?
    str.substr(0, n / 2) + '...' + str.substr(str.length - n / 2 + 3, str.length) :
    str;

const truncateUrl = maxLength(50);

const Link = ({ url }) =>
  <a target="_blank" href={url}>
    {truncateUrl(url)}
  </a>;

const HackerNewsHeadline = ({ title, url }) =>
  <div className={styles.root}>
    { title &&
      <div className={styles.title}>
        { title }
      </div>
    }

    { url &&
      <div className={styles.url}>
        <Link url={url}/>
      </div>
    }
  </div>;

HackerNewsHeadline.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default HackerNewsHeadline;

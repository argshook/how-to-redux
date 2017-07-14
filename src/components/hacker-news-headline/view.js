import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const maxLength = n => str =>
  str.length > n ?
    str.substr(0, n / 2) + '...' + str.substr(str.length - n / 2 + 3, str.length) :
    str;

const Link = ({ url }) =>
  <a target="_blank" href={url}>
    {maxLength(50)(url)}
  </a>;

const View = ({ title, url }) =>
  <div className={styles.root}>
    <div className={styles.title}>
      { title }
    </div>

    <div className={styles.url}>
      <Link url={url}/>
    </div>
  </div>;

View.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default View;

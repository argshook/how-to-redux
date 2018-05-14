import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const maxLength = n => str => {
  const len = str.length;

  return len > n
    ? str.substr(0, n / 2) + '...' + str.substr(len - n / 2 + 3, len)
    : str;
};

const Link = ({ url }) =>
  <a target="_blank" href={url}>
    {maxLength(50)(url)}
  </a>;

const View = ({ title, url }) =>
  <div className={styles.root}>
    <div className={styles.title}>
      { title }
    </div>

    { url &&
      <div className={styles.url}>
        <Link url={url}/>
      </div>
    }
  </div>;

View.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string
};

View.defaultProps = {
  title: '',
  url: ''
};

export default View;

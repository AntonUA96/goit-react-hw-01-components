import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title !== '' ? (
        <h2 className="title">{title}</h2>
      ) : (
        <h2 style={{ display: 'none' }}></h2>
      )}

      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={styles.item}
            style={{
              backgroundColor: `rgb(${Math.random() * 255}, ${
                Math.random() * 255
              },${Math.random() * 255})`,
            }}
          >
            <span>{label}</span>
            <span>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.string,
};

export default Statistics;

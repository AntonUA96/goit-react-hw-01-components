import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ name, avatar, tag, location, stats }) => {
  return (
    <div className={styles.profile}>
      <div>
        <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.ulItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.ulItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={styles.ulItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  tag: 'username',
};

Profile.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css'

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <>
        {isOnline === true ? <span className={styles.status}></span> : <span className={styles.statusOff}></span>}
        
        <img className={styles.avatar} src={avatar} alt="" width="48" />
        <p className={styles.name}>{name}</p>
      </>
    )
}


FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string, 
isOnline: PropTypes.bool,
}

export default FriendListItem;
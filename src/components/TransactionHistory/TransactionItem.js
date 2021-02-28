import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';
import TransactionHistory from './TransactionHistory';

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionItem;

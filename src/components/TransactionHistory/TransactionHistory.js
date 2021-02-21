import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {

    return (
        <table className={styles.transactionHistory}>
  <thead className={styles.head}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

{items.map(({id, type, amount, currency}) => 
  <tbody key={id}>
   <TransactionItem 
   type={type}
   amount={amount}
   currency={currency}
   />
</tbody>)}

</table>
    )
}


export default TransactionHistory;
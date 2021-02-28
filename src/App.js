import React from 'react';
import Profile from './components/Profile/Profile';
import user from './data/user.json';
import statisticsData from './data/statistical-data.json';
import Statistics from './components/Statistics/Statistics';
import friends from './data/friends.json';
import FriendList from './components/FriendList/FriendList';
import transactions from './data/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticsData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;

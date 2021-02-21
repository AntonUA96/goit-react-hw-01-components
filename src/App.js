import React from 'react';
import Profile from './components/Profile/Profile';
import user from './user.json';
import statisticsData from './statistical-data.json';
import Statistics from './components/Statistics/Statistics';
import friends from './friends.json';
import FriendList from './components/FriendList/FriendList'; 
import transactions from './transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';


const App = () => {
  return(
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
  <TransactionHistory items={transactions} />;
</div>
    )
}




export default App;
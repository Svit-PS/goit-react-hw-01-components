
import user from '../Data/user';
import data from '../Data/data';
import friends from '../Data/friends';
import transactions from '../Data/transactions';
import { Statistics } from './Statistics/Statistics.jsx';
import { Profile } from './Profiles/Profile.jsx';
import {FriendList} from './FriendList/FriendList.jsx'
import React from 'react';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <>
      <Profile
    key={user.tag}
    username={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
      />
    <Statistics 
        title="Upload stats"
        stats={data}  />
    <FriendList
        friends = {friends}
      />
      <TransactionHistory
        transactions={transactions}
      />
    </>
    
  )
};

export default App;

// {/* <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//      Hello 
//     </div> */}
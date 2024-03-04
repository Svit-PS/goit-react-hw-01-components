import PropTypes from 'prop-types';
import { Friend } from './Friend';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <Friend key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </List>
  );
};

FriendList.prototype = {
  friends: PropTypes.array.isRequired,
};

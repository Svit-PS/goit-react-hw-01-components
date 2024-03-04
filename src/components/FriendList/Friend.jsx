import PropTypes from 'prop-types';
import { Link, Span } from './FriendList.styled';

export const Friend = ({ avatar, name, isOnline }) => {
  return (
    <Link>
      <Span color={isOnline ? 'green' : 'red'}>{isOnline ? 'V' : 'X'}</Span>
      <img src={avatar} alt={name} />
      <p>{name}</p>
    </Link>
  );
};

Friend.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

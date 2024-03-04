import PropTypes from 'prop-types';
import { Container, Foto, Name, Tag, List } from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <Container>
      <Foto>
        <img src={avatar} alt={username} className="avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Name>{location}</Name>
      </Foto>

      <List>
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </List>
    </Container>
  );
};

Profile.prototype = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

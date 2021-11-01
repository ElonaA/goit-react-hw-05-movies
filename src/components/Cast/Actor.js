import PropTypes from 'prop-types';
import { Item, Avatar, Image, Name, Role } from './Actor.styled';
import image from '../../img/men.jpg';

export default function Actor({ actor }) {
  return (
    <Item>
      {actor.profile_path ? (
        <Avatar
          src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
          alt={actor.name}
        />
      ) : (
        <Image src={image} alt={actor.name} />
      )}

      <Name>{actor.name}</Name>
      <Role>{actor.character}</Role>
    </Item>
  );
}

Actor.propTypes = {
  actor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    character: PropTypes.string,
    profile_path: PropTypes.string,
  }).isRequired,
};

import PropTypes from 'prop-types';
import dateFormat from 'dateformat';

import {
  Rating,
  Date,
  Vote,
  Text,
  Container,
  Inner,
  Image,
  Wrapper,
  Title,
  Stats,
} from './Movies.styled';
import star from '../../img/star.png';
import vote from '../../img/vote.png';
import placeholder from '../../img/placeholder.png';

//Элемент одной карточки фильмов
const MovieListItem = ({ movie }) => {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : placeholder;

  const date = movie.release_date;

  return (
    <Container>
      <Inner>
        <Image
          src={poster}
          alt={
            movie.name ||
            movie.title ||
            movie.original_name ||
            movie.original_title
          }
        />
      </Inner>

      <Wrapper>
        <Title>
          {movie.name ||
            movie.title ||
            movie.original_name ||
            movie.original_title}
        </Title>
        {movie.release_date ? (
          <Date>{dateFormat(date, 'dd mmmm yyyy')}</Date>
        ) : (
          <span>N/A</span>
        )}
      </Wrapper>
      <Stats>
        <Rating>
          <img src={star} alt="" width="28" />
          <Text>{movie.vote_average}</Text>
        </Rating>
        <Vote>
          <img src={vote} alt="" width="28" />
          <Text>{movie.vote_count}</Text>
        </Vote>
      </Stats>
    </Container>
  );
};

MovieListItem.propTypes = {
  movies: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }),
};

export default MovieListItem;

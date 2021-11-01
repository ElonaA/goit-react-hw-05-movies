import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import dateFormat from 'dateformat';

import star from '../../img/star.png';
import vote from '../../img/vote.png';
import placeholder from '../../img/placeholder.png';
import posterBg from '../../img/poster_bg.jpg';

import {
  Inner,
  MainTitle,
  Time,
  Heading,
  Tagline,
  Wrapper,
  Poster,
  Image,
  About,
  AboutInner,
  AboutTitle,
  Date,
  Stats,
  Rating,
  Vote,
  Average,
  Genres,
  Genre,
  Description,
  Text,
} from './MovieDetails.styled';

//Полная карточка одного фильма
const MovieDetails = ({ movie }) => {
  const {
    title,
    name,
    tagline,
    release_date,
    vote_average,
    poster_path,
    original_name,
    overview,
    genres,
    original_title,
    vote_count,
    backdrop_path,
    runtime,
  } = movie;

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : placeholder;

  const placeholderBg = backdrop_path
    ? `https://image.tmdb.org/t/p/w1280/${backdrop_path}`
    : posterBg;

  const date = release_date;

  return (
    <>
      <Inner>
        <MainTitle>
          <Heading>{original_title || title || name}</Heading>
          <Tagline>{tagline || title}</Tagline>
        </MainTitle>
      </Inner>

      <Wrapper background={placeholderBg}>
        <Poster>
          <Image
            src={poster}
            alt={name || title || original_name || original_title}
          />
        </Poster>
        <About>
          <AboutInner>
            <AboutTitle>Date release:</AboutTitle>
            {release_date ? (
              <Date> {dateFormat(date, 'dd mmmm yyyy')}</Date>
            ) : (
              <span>N/A</span>
            )}
          </AboutInner>
          <AboutInner>
            <AboutTitle>Time to watch:</AboutTitle>
            {runtime ? <Time>{runtime} min</Time> : <span>N/A</span>}
          </AboutInner>
          <AboutInner>
            <AboutTitle>Rating:</AboutTitle>
            <Stats>
              <Rating>
                <img src={star} alt="" width="28" />
                {vote_average ? (
                  <Average>{vote_average}</Average>
                ) : (
                  <span>N/A</span>
                )}
              </Rating>

              <Vote>
                <img src={vote} alt="" width="28" />
                {vote_count ? (
                  <Average>{vote_count}</Average>
                ) : (
                  <span>N/A</span>
                )}
              </Vote>
            </Stats>
          </AboutInner>
          <AboutInner>
            <AboutTitle>Genres:</AboutTitle>
            <Genres>
              {genres &&
                genres.map(({ id, name }) => <Genre key={id}>{name}</Genre>)}
            </Genres>
          </AboutInner>
          {overview ? (
            <Description>
              <AboutTitle>About:</AboutTitle>
              <Text>{overview}</Text>
            </Description>
          ) : (
            <span>No info about this movie...</span>
          )}
        </About>
      </Wrapper>
    </>
  );
};

export default withRouter(MovieDetails);

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    media_type: PropTypes.string,
    poster_path: PropTypes.string,
    homepage: PropTypes.string,
    tagline: PropTypes.string,
    release_date: PropTypes.string,
    first_air_date: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    original_name: PropTypes.string,
    original_title: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      }),
    ),
  }).isRequired,
};

MovieDetails.defaultProps = {
  movie: PropTypes.shape({
    release_date: '',
    vote_average: 0,
    overview: '',
    genres: [],
  }),
};

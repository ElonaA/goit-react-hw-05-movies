import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import MovieListItem from './MovieListItem';

import { List, Item } from './Movies.styled';
import path from '../../components/Routes/paths';

const MoviesList = ({ movies, type, location }) => {
  return (
    <List>
      {movies.map(movie => (
        <Item key={movie.id}>
          <Link
            to={{
              pathname: `${path.MOVIES}/${movie.id}`,
              state: {
                from: location,
              },
            }}
          >
            <MovieListItem movie={movie} key={movie.id} type={type} />
          </Link>
        </Item>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  location: PropTypes.object.isRequired,
  type: PropTypes.string,
};

export default withRouter(MoviesList);

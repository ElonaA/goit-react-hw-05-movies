import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Suspense, lazy } from "react";
import { useRouteMatch, useLocation, useHistory, Route, Switch } from 'react-router-dom';

import { toast } from 'react-toastify';

import api from '../../services/Api';

import Button from '../../components/Button/Button';
import Preloader from '../../components/Loader/Loader';
import Container from '../../components/Markup/Container/Container';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import MovieNavigation from '../../components/MovieNavigation/MovieNavigation';

import paths from '../../components/Routes/paths';

const Cast = lazy(() =>
  import("../../components/Cast/Cast" /*webpackChunkName: "cast-list" */)
);
const Reviews = lazy(() =>
  import("../../components/Reviews/Reviews" /*webpackChunkName: "reviews-list" */)
);


const MovieDetailsPage = () => {

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();


  useEffect(() => {
    fetchDetails();
    // eslint-disable-next-line
  }, [])


  const fetchDetails = async () => {
    const { movieId } = match.params; // получаем айди с пропсов
    setLoading(true);
    try {
      const data = await api.fetchDetails(movieId);
      
      setMovie(data);
    } catch (error) {
      toast.error(`Something went weong :(`);
    } finally {
      setLoading(false);
    }
  }

  const handleGoBack = () => {
    history.push(location?.state?.from || paths.HOME);
  };
 
  return (
    <Container>
      <Button onClick={handleGoBack} text="Go Back" />
      {movie && <MovieDetails movie={movie} />}
      {movie && <MovieNavigation />}

      <Suspense fallback={<Preloader />}>
        <Switch>
          <Route exact path={`${match.path}${paths.CAST}`} component={Cast}></Route>
          <Route exact path={`${match.path}${paths.REVIEWS}`} component={Reviews}></Route>
        </Switch>
      </Suspense>

      {loading && <Preloader />}
      </Container>
    );
  }

  MovieDetailsPage.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default MovieDetailsPage;

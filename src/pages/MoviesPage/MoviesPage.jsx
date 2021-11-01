import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import api from '../../services/Api';
import MoviesList from '../../components/Movies/MoviesList'
import Searchform from '../../components/Searchform/Searchform'
 
import {Wrapper, Heading } from "./MoviesPage.styled";
import Container from '../../components/Markup/Container/Container';
import Preloader from '../../components/Loader/Loader';
import Button from '../../components/Button/Button.jsx';
import {  toast } from 'react-toastify';

const MoviesPage = () => {
  const location = useLocation();
  const history = useHistory();
  const { search } = location;
  const { query } = queryString.parse(search);

  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState(query || '');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    if (!searchQuery) return;

    fetchMovies();
  // eslint-disable-next-line
  }, [searchQuery]);
 
  const fetchMovies = async () => {
    setLoading(true);

    try {
      const data = await api.fetchSearch(searchQuery,page);

      if (data.length === 0) {
      toast.info('Nothing found 🙄', {
      autoClose: 2000,
      });
      }

      setMovies(prev => [...prev, ...data]);
      setPage(prevPage => prevPage + 1);
      setLoading(true);

    } catch (error) {
      toast.error(`Something went weong :(`);
    } finally {
      setLoading(false);
    }
  }

  const onChangeQuery = query => {
    setMovies([]);
    setSearchQuery(query);
    setPage(1);

    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  return (
    <Container>
      {loading && <Preloader />}
      <Wrapper>
        <Heading>Search Movies</Heading>
        <Searchform onSearch={onChangeQuery} />
        <MoviesList movies={movies} />
        {movies.length > 0 && <Button onClick={fetchMovies} text="Load More" />}
      </Wrapper>     
    </Container>
  );
}


export default MoviesPage;
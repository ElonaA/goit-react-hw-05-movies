import { useState, useEffect } from 'react';
import api from '../../services/Api';
import MoviesList from '../../components/Movies/MoviesList'
 
import {Wrapper } from "./HomePage.styled";
import Container from '../../components/Markup/Container/Container';
import Preloader from '../../components/Loader/Loader';
import PageHeading from '../../components/Markup/PageHeading/PageHeading';
import {  toast } from 'react-toastify';

const HomePage = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(false);
 
    useEffect(() => {
    fetchMovies();

  }, []);
 
  const fetchMovies = async () => {
    setLoading(true);

    try {
      const data = await api.fetchTrendingMovies();
      setTrends(data);

    } catch (error) {
      toast.error(`Something went weong :(`);
    } finally {
      setLoading(false);
    }
  }
 
  return (
    <Container>
      {trends.length > 0 && (
          <Wrapper>
            <PageHeading text="Trending today" />
            <MoviesList movies={trends} />
          </Wrapper>
      )}
      {loading && <Preloader />}       
    </Container>
  );
}


export default HomePage;
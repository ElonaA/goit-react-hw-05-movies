import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '2e8539eb2d29d5a9e1af7ff56f1985d1';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

//Фетчим тренды
const fetchTrendingMovies = async () => {
  try {
    const { data } = await axios.get(
      `trending/movie/day?&language=en-US&include_image_language=en`,
    );
    const trends = data.results;
    return trends;
  } catch (error) {
    console.error('Somenting went wrong with fetch trends in api', error);
  }
};

//Фетч по айди одного фильма
const fetchDetails = async movieId => {
  try {
    const { data } = await axios.get(
      `movie/${movieId}?&language=ru-RU&include_image_language=en`,
    );
    return data;
  } catch (error) {
    console.error('Somenting went wrong with fetch movieid in api', error);
  }
};

//Фетч актеров к фильму
const fetchCast = async movieId => {
  try {
    const { data } = await axios.get(
      `movie/${movieId}/credits?&language=en-US`,
    );
    return data;
  } catch (error) {
    console.error('Somenting went wrong with fetch cast in api', error);
  }
};

//Фетч отзывов к фильму
const fetchReviews = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}/reviews`);
    const reviews = data.results;
    return reviews;
  } catch (error) {
    console.error('Somenting went wrong with fetch reviews in api', error);
  }
};

//Фетч результатов поиска
const fetchSearch = async (query, page = 1) => {
  try {
    const { data } = await axios.get(
      `search/multi?&query=${query}&page=${page}&language=en-US`,
    );
    const search = data.results;
    return search;
  } catch (error) {
    console.error('Somenting went wrong with fetch query in api', error);
  }
};

// eslint-disable-next-line
export default {
  fetchTrendingMovies,
  fetchReviews,
  fetchSearch,
  fetchCast,
  fetchDetails,
};

import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import api from '../../services/Api';
import { Wrapper, List } from './Reviews.styled';
import ReviewItem from './ReviewItem';
import Preloader from '../Loader/Loader';

//Компонент отзывов
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const match = useRouteMatch();

  useEffect(() => {
    fetchReviews();
    // eslint-disable-next-line
  }, []);

  const fetchReviews = async () => {
    const { movieId } = match.params; // получаем айди с пропсов
    setLoading(true);
    try {
      const reviews = await api.fetchReviews(movieId);
      setReviews(reviews);
    } catch (error) {
      toast.error(`Something went weong :(`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      {loading && <Preloader />}

      <List>
        {reviews.length > 0 ? (
          reviews.map(review => <ReviewItem key={review.id} review={review} />)
        ) : (
          <h1>There are no reviews yet. 😔 Be the first!</h1>
        )}
      </List>
    </Wrapper>
  );
};

Reviews.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Reviews;

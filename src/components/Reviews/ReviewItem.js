import PropTypes from 'prop-types';
import {
  Review,
  AuthorBox,
  Image,
  AuthorName,
  Text,
  Avatar,
} from './Reviews.styled';
import avatar from '../../img/blankAvatar.jpg';

export default function ReviewItem({ review }) {
  const gravatar = review.author_details.avatar_path;

  return (
    <Review>
      <AuthorBox>
        {review.author_details.avatar_path ? (
          <Avatar
            src={
              gravatar.slice(1) ||
              `https://image.tmdb.org/t/p/w200/${review.author_details.avatar_path}`
            }
            alt={review.author}
          />
        ) : (
          <Image src={avatar} alt={review.author} />
        )}
        <AuthorName>{review.author}</AuthorName>
      </AuthorBox>
      <Text>{review.content}</Text>
    </Review>
  );
}

ReviewItem.propTypes = {
  rewiew: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};

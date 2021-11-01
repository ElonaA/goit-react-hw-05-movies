import PropTypes from 'prop-types';
import { Title } from './PageHeading.styled';

export default function PageHeading({ text }) {
  return <Title>{text}</Title>;
}

PageHeading.propTypes = {
  text: PropTypes.string,
};

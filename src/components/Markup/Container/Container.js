import PropTypes from 'prop-types';
import { Inner } from './Container.styled';

export default function Container({ children }) {
  return <Inner>{children}</Inner>;
}

Container.defaultProps = {
  children: [],
};

Container.propTypes = {
  children: PropTypes.node,
};

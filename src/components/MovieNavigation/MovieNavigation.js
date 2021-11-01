import PropTypes from 'prop-types';
import {
  NavLink,
  useRouteMatch,
  useLocation,
  withRouter,
} from 'react-router-dom';

import paths from '../Routes/paths';

import styled from '@emotion/styled/macro';
import { Navigate, Item, NavigateList, Text } from './MovieNavigation.styled';

export const DetailsLink = styled(NavLink)`
  padding: 20px 0 8px;
  position: relative;
  font-size: 23px;
  font-weight: 500;
  color: ${props => props.theme.colors.black};
  margin-bottom: 30px;
  z-index: 1;
  text-decoration: none;

  &.${props => props.activeClassName} {
  &::before {
  content: "";
  position: absolute;
  left: 40%;
  bottom: 16px;
  width: 70px;
  height: 14px;
  transform: skew(-12deg) translateX(-50%);
  background: ${props => props.theme.colors.primary};
  z-index: -1;
    }
`;

//Меню актеров и отзывов
const MovieNavigation = () => {
  const location = useLocation();
  const match = useRouteMatch();

  return (
    <>
      <Text>Additional information:</Text>
      <Navigate>
        <NavigateList>
          <Item>
            <DetailsLink
              to={{
                pathname: `${match.url}${paths.CAST}`,
                state: location,
              }}
              activeClassName="active"
            >
              {' '}
              Cast
            </DetailsLink>
          </Item>

          <Item>
            <DetailsLink
              to={{
                pathname: `${match.url}${paths.REVIEWS}`,
                state: location,
              }}
              activeClassName="active"
            >
              {' '}
              Reviews
            </DetailsLink>
          </Item>
        </NavigateList>
      </Navigate>
    </>
  );
};

MovieNavigation.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(MovieNavigation);

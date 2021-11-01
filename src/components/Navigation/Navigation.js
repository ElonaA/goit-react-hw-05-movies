import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled/macro';
import { List, Item } from './Navigation.styled';
import paths from '../Routes/paths';

export const MenuLink = styled(NavLink)`
    padding: 20px 0 8px;
    position: relative;
    font-size: ${props => props.theme.size.title};
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

const Navigation = () => (
  <nav>
    <List>
      <Item>
        <MenuLink exact to={paths.HOME} activeClassName={'active'}>
          Home
        </MenuLink>
      </Item>
      <Item>
        <MenuLink to={paths.MOVIES} activeClassName={'active'}>
          Movies
        </MenuLink>
      </Item>
    </List>
  </nav>
);

export default Navigation;

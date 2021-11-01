import styled from '@emotion/styled/macro';

export const Text = styled.h3`
  font-size: ${props => props.theme.size.title};
  line-height: 1.3;
  text-align: justify;
  padding: 0px 15px;
`;

export const Navigate = styled.nav`
  margin-top: 10px;
  border-top: 2px solid ${props => props.theme.colors.primary};
  border-bottom: 2px solid ${props => props.theme.colors.primary};
  padding: 15px 30px;
`;

export const NavigateList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  &:not(:last-child) {
    padding-right: 30px;
  }
`;

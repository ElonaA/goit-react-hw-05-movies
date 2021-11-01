import styled from '@emotion/styled/macro';

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

export const Item = styled.li`
  &:not(:last-child) {
    padding-right: 20px;
  }
`;

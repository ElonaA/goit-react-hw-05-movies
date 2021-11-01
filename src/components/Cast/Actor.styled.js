import styled from '@emotion/styled/macro';

export const Item = styled.li`
  width: 100%;
  text-align: center;
  margin-bottom: 10px;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Avatar = styled.img`
  height: auto;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const Name = styled.h3`
  font-weight: 700;
  margin-bottom: 5px;
  font-size: ${props => props.theme.size.subtitle};
`;

export const Role = styled.p`
  font-style: italic;
  font-size: ${props => props.theme.size.small};
`;

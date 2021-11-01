import styled from '@emotion/styled/macro';

export const Image = styled.div`
  width: 100%;
  height: auto;
  display: block;
`;

export const Title = styled.h2`
  margin: 0px;
  padding-bottom: 10px;
  font-size: ${props => props.theme.size.title};
  font-weight: 400;
  line-height: 1.4;
  color: ${props => props.theme.colors.black};
  text-align: left;
`;

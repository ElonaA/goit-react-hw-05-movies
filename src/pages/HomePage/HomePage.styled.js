import styled from '@emotion/styled/macro';

export const Wrapper = styled.div`
  padding: 10px;
`;

export const Title = styled.h2`
  margin: 0px;
  padding-bottom: 10px;
  font-size: ${props => props.theme.size.title};
  font-weight: 400;
  line-height: 1.4;
  color: ${props => props.theme.colors.white};
  text-align: left;
`;

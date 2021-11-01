import styled from '@emotion/styled/macro';

export const Inner = styled.div`
  padding: 30px;
  margin-right: auto;
  margin-left: auto;
  width: 1200px;
  margin-bottom: 70px;
  background-color: ${props => props.theme.colors.white};
  -webkit-box-shadow: 0px 0px 15px -2px rgba(66, 65, 66, 1);
  -moz-box-shadow: 0px 0px 15px -2px rgba(66, 65, 66, 1);
  box-shadow: 0px 0px 15px -2px rgba(66, 65, 66, 1);
`;

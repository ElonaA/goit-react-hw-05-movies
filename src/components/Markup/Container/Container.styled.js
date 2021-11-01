import styled from '@emotion/styled/macro';

export const Inner = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 35px;
  margin-bottom: 50px;
  min-height: 500px;
  background-color: ${props => props.theme.colors.white};
  -webkit-box-shadow: 0px 0px 15px -2px rgba(66, 65, 66, 1);
  -moz-box-shadow: 0px 0px 15px -2px rgba(66, 65, 66, 1);
  box-shadow: 0px 0px 15px -2px rgba(66, 65, 66, 1);
`;

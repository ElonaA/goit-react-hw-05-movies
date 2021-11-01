import styled from '@emotion/styled/macro';

export const Container = styled.div`
  position: relative;
`;

export const Inner = styled.div`
  position: relative;
  height: 300px;
`;
export const Item = styled.div`
  margin-bottom: 20px;
  display: flex;
`;
export const Stats = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  justify-content: space-around;
  background-color: #ececec91;
  opacity: 0;
  transition: opacity 450ms ease;

  ${Item}:hover & {
    opacity: 1;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  -webkit-box-shadow: 0px 0px 15px -2px rgba(66, 65, 66, 1);
  -moz-box-shadow: 0px 0px 15px -2px rgba(66, 65, 66, 1);
  box-shadow: 0px 0px 15px -2px rgba(66, 65, 66, 1);
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const Title = styled.p`
  padding: 0;
  margin: 0;
  font-size: ${props => props.theme.size.subtitle};
  font-weight: 500;
  color: ${props => props.theme.colors.black};
  padding-top: 20px;
`;
export const Date = styled.p`
  padding: 0;
  margin: 0;
  font-size: ${props => props.theme.size.subtitle};
  font-weight: 400;
  color: ${props => props.theme.colors.black};
  padding-top: 8px;
`;

export const Rating = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
`;

export const Vote = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: auto;
  color: ${props => props.theme.colors.white};
`;
export const Text = styled.p`
  margin-left: 10px;
  font-weight: 500;
  color: ${props => props.theme.colors.black};
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 24px;
`;

export const Link = styled.a`
  text-decoration: none;
`;

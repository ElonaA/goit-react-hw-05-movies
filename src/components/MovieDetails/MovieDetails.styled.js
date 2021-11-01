import styled from '@emotion/styled/macro';

export const Wrapper = styled.div`
  margin-top: 30px;
  padding: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  object-fit: cover;
  background: linear-gradient(
      to right,
      rgb(229 229 229 / 92%),
      rgb(255 255 255 / 78%)
    ),
    url(${props => props.background});
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const MainTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Image = styled.img`
  display: block;
  object-fit: cover;
  object-position: center;
  -webkit-box-shadow: 0px 0px 15px -2px rgba(66, 65, 66, 1);
  -moz-box-shadow: 0px 0px 15px -2px rgba(66, 65, 66, 1);
  box-shadow: 0px 0px 15px -2px rgba(66, 65, 66, 1);
`;

export const Heading = styled.h2`
  padding-bottom: 8px;
  margin: 0;
`;

export const Poster = styled.div`
  width: 350px;
`;

export const Stats = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  justify-content: space-around;
`;

export const About = styled.div`
  padding: 0px 30px;
  margin-left: 40px;
`;
export const AboutInner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 8px;
`;
export const Tagline = styled.h3`
  padding: 0;
  margin: 0;
  font-size: ${props => props.theme.size.subtitle};
  font-weight: 400;
  font-style: italic;
`;
export const Rating = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Vote = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
`;
export const Text = styled.p`
  font-size: ${props => props.theme.size.subtitle};
  line-height: 1.3;
  text-align: justify;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Link = styled.a`
  padding: 20px 0 8px;
  position: relative;
  font-size: ${props => props.theme.size.title};
  font-weight: 500;
  color: ${props => props.theme.colors.black};
  z-index: 1;
  text-decoration: none;
`;
export const Date = styled.span`
  padding: 0;
  margin: 0;
`;

export const Navigate = styled.nav`
  margin-top: 30px;
  border-top: 2px solid ${props => props.theme.colors.primary};
  border-bottom: 2px solid ${props => props.theme.colors.primary};
  padding: 15px;
`;
export const Genre = styled.li`
  display: flex;
  padding: 8px 15px;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 8px;

  &:not(:last-child) {
    margin-right: 15px;
  }
`;
export const AboutTitle = styled.h3`
  padding: 0;
  margin: 0;
  margin-right: 15px;
`;
export const Average = styled.p`
  padding-left: 5px;
`;
export const Genres = styled.ul`
  padding: 0;
  display: flex;
  list-style: none;
`;
export const List = styled.ul`
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
export const Time = styled.span`
  margin: 0px;
`;

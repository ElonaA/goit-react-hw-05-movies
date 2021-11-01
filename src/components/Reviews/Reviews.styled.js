import styled from '@emotion/styled/macro';

export const Wrapper = styled.div`
  padding: 15px;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Review = styled.li`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  margin-top: 20px;
  border-bottom: 1px solid #eee;
`;

export const AuthorBox = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const AuthorName = styled.p`
  font-size: ${props => props.theme.size.subtitle};
  line-height: 1.3;
  text-align: justify;
  margin-left: 10px;
  font-weight: 600;
`;

export const Text = styled.p`
  font-size: ${props => props.theme.size.subtitle};
  line-height: 1.3;
  text-align: justify;
  margin: 0px;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Avatar = styled.img`
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const Image = styled.img`
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

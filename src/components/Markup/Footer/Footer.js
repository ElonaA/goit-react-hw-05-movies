import { Inner, Text } from './Footer.styled';

const Footer = () => (
  <footer>
    <Inner>
      <Text> &copy; {new Date().getFullYear()} Get Trending movies</Text>
    </Inner>
  </footer>
);

export default Footer;

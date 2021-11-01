import {Title, Image} from "./PageNotFound.styled";
import cat from "../../img/cat.jpg"
import Container from "../../components/Markup/Container/Container";


const PageNotFound = () => (
  <Container>
    <Title>
      Error 404: Page Not Found.
    </Title>
    <Image src={cat} aria-label="sheep" />
  </Container>
);

export default PageNotFound;


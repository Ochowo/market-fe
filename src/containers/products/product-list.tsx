import { Container } from "../../components/image-carousel/styles/image-carousel.style";
import { CardGroup, More, Title, Wrapper } from "./styles/products.styled";
import ProductCard from "./widget/card-item";

const Products = ({
  products,
  id,
  onClick,
}: {
  id?: string;
  products: { [key: string]: any }[];
  onClick?: () => void;
}) => {
  return (
    <Wrapper id={id}>
      <Container margin="0 auto" width="100%">
        <Container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          position="sticky"
          className="navbar"
          zIndex="99"
          padding="1rem"
        >
          <Title> Best Sale Product</Title>
          <More>See more</More>
        </Container>

        <Container smpadding="0" padding="1rem" bgColor="rgb(242 242 243)">
          <CardGroup>
            {products.map((product: any) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={onClick}
              />
            ))}
          </CardGroup>
        </Container>
      </Container>
    </Wrapper>
  );
};

export default Products;

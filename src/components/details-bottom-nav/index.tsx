/* eslint-disable @typescript-eslint/no-unused-vars */
import { FiShoppingBag } from "react-icons/fi";
import {
  BottomNavigation,
  BottomNavigationList,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  BottomNavigationItem,
} from "./styles/bottom-nav.style";
import { Text } from "../../containers/products/product-details/styles/details.style";
import { Container } from "../image-carousel/styles/image-carousel.style";
import { Price } from "../../containers/products/styles/products.styled";

const BottomNav = () => {
  return (
    <BottomNavigation>
      <BottomNavigationList>
        <Container gap=".2rem">
          <Text fontSize="1rem">Total Price</Text>
          <Price>₦12,000</Price>
        </Container>
        <Container direction="row">
          <Container
            height="45px"
            width="70px"
            bgColor="#309880"
            direction="row"
            justifyContent="center"
            alignItems="center"
            topLeft="5px"
            bottomLeft="5px"
          >
            <FiShoppingBag color="#fff" size={20} />
            <Text color="#fff">1</Text>
          </Container>
          <Container
            justifyContent="center"
            alignItems="center"
            height="45px"
            width="100px"
            bgColor="#000"
            topRight="5px"
            bottomRight="5px"
          >
            <Text color="#fff" fontWeight="500">
              Buy Now
            </Text>
          </Container>
        </Container>
      </BottomNavigationList>
    </BottomNavigation>
  );
};
export default BottomNav;

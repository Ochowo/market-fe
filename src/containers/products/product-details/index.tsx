import { FaAngleLeft, FaStar, FaHeart, FaDotCircle } from "react-icons/fa";
import { CiShare2, CiHeart } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import { DetailsRow, Text, TopBar, TopBarItem } from "./styles/details.style";
import { CardImageBox } from "../styles/products.styled";
import { Container } from "../../../components/image-carousel/styles/image-carousel.style";
import Tabs from "../../../components/tab";
import BottomNav from "../../../components/details-bottom-nav";

const ProductDetails = ({
  onClick,
  className,
}: {
  onClick: () => void;
  className: string;
}) => {
  const img = `/assets/images/003.jpg`;
  const hello = true;
  const [activeTab, setActiveTab] = useState("About");
  let component;
  switch (activeTab) {
    case "Reviews":
      component = <div>reviews</div>;
      break;
    default:
      component = (
        <Container gap=".5rem" padding-bottom="1rem" margin="0 0 5rem 0">
          <Container direction="row" gap="5rem">
            <Container direction="row" gap="1rem" alignItems="center">
              {" "}
              <Text>Brand:</Text>{" "}
              <Text fontWeight="500" color="#161828">
                CharmkpR
              </Text>
            </Container>
            <Container direction="row" gap="1rem" alignItems="center">
              {" "}
              <Text fontSize="1rem">Color:</Text>{" "}
              <Text fontWeight="500" color="#161828">
                Aprikot
              </Text>
            </Container>
          </Container>
          <Container direction="row" gap="5rem">
            <Container direction="row" gap="1rem" alignItems="center">
              {" "}
              <Text>Brand:</Text>{" "}
              <Text fontWeight="500" color="#161828">
                CharmkpR
              </Text>
            </Container>
            <Container direction="row" gap="1rem" alignItems="center">
              {" "}
              <Text>Color:</Text>{" "}
              <Text fontWeight="500" color="#161828">
                Aprikot
              </Text>
            </Container>
          </Container>
          <Container direction="row" gap="5rem">
            <Container direction="row" gap="1rem" alignItems="center">
              {" "}
              <Text>Brand:</Text>{" "}
              <Text fontWeight="500" color="#161828">
                CharmkpR
              </Text>
            </Container>
            <Container direction="row" gap="1rem" alignItems="center">
              {" "}
              <Text fontSize="1rem">Color:</Text>{" "}
              <Text fontWeight="500" color="#161828">
                Aprikot
              </Text>
            </Container>
          </Container>
        </Container>
      );
  }
  return (
    <>
      <Container className={className}>
        <TopBar>
          <FaAngleLeft onClick={onClick} fontSize="24" />
          <TopBarItem>
            {hello ? (
              <FaHeart color="#E55986" size={20} />
            ) : (
              <CiHeart color="494A59" size={20} />
            )}
            <CiShare2 fontSize="24" />
            <FiShoppingBag color="#4A4A5A" size={20} />
          </TopBarItem>
        </TopBar>
        <Container>
          <CardImageBox smHeight="320px" height="auto">
            <LazyLoadImage
              src={img}
              alt="productimage"
              effect="blur"
              onError={(e: any) => {
                e.currentTarget.src = "product image";
              }}
            />
          </CardImageBox>

          <DetailsRow>
            <Text margin="0 0 2rem 0">tokobaju.id</Text>
            <Text
              margin="0 0 2rem 0"
              fontSize="1.2rem"
              color="#161828"
              fontWeight="600"
            >
              Essentials Men Short-Sleeve Crewnect T-Shirt
            </Text>
            <Container>
              <Container direction="row" justifyContent="space-between">
                <Container direction="row" alignItems="center" gap=".3rem">
                  <FaStar color="#FFE83B" />
                  <Text fontSize="1rem">4.9</Text>
                </Container>
                <Container direction="row" alignItems="center" gap=".3rem">
                  <FaDotCircle color="#c0c1c5" />
                  <Text fontSize="1rem"> 2.3k+ Reviews</Text>
                </Container>
                <Container direction="row" alignItems="center" gap=".3rem">
                  <FaDotCircle color="#c0c1c5" />
                  <Text fontSize="1rem">2.9k Sold</Text>
                </Container>
              </Container>
            </Container>
          </DetailsRow>
          <Tabs>
            {[{ name: "About" }, { name: "Reviews" }].map((tab) => (
              <Tabs.Tab
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                active={activeTab === tab.name}
              >
                {tab.name}
              </Tabs.Tab>
            ))}
          </Tabs>
          <Tabs.Body>{component}</Tabs.Body>
        </Container>
      </Container>
      <BottomNav />
    </>
  );
};

export default ProductDetails;

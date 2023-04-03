import Carousel from "react-multi-carousel";
import { responsive } from "../../data";
import { CarouselWrapper } from "./styles/image-carousel.style";
import "react-multi-carousel/lib/styles.css";
import ImageCarouselItem from "../image-carousel-item";

export const images = [
  { src: "/assets/images/fashionn.jpg", alt: "Image 1" },
  { src: "/assets/images/makeuppp.jpg", alt: "Image 2" },
  { src: "/assets/images//makeupppp.jpg", alt: "Image 3" },
];
const ImageCarousel = () => {
  return (
    <CarouselWrapper>
      <Carousel
        arrows={false}
        responsive={responsive}
        autoPlay
        autoPlaySpeed={3000}
        rewind
        infinite
        rewindWithAnimation
      >
        {images.map((image) => (
          <ImageCarouselItem key={image.src} src={image.src} alt={image.alt} />
        ))}
      </Carousel>
    </CarouselWrapper>
  );
};

export default ImageCarousel;

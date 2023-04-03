// import { FiShoppingBag, FiMessageSquare } from "react-icons/fi";
// import IconWithSuperscript from "../icon-with-supercript";
import {
  // CarouselItem,
  CarouselItemWrapper,
} from "./styles/carousel-item.style";

const ImageCarouselItem = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <CarouselItemWrapper>
      <img src={src} alt={alt} />
    </CarouselItemWrapper>
  );
};
export default ImageCarouselItem;

import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaStar, FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import {
  CardContent,
  CardImageBox,
  CardWrapper,
  GroupCardItem,
  LikeIcon,
  Price,
  Rating,
} from "../../styles/products.styled";

type CardProps = {
  bgColor?: string;
  padding?: string;
  product: { [key: string]: any };
  onClick?: () => void;
};

const ProductCard = ({ product, bgColor, padding, onClick }: CardProps) => {
  const img = `/assets/images/${product?.image[0]}`;
  return (
    <CardWrapper onClick={onClick}>
      <CardImageBox bgColor={bgColor} padding={padding}>
        <LazyLoadImage
          src={img}
          alt="productimage"
          effect="blur"
          onError={(e: any) => {
            e.currentTarget.src = "product image";
          }}
        />
        <LikeIcon>
          {product?.like ? (
            <FaHeart color="#E55986" size={25} />
          ) : (
            <CiHeart color="494A59" size={25} />
          )}
        </LikeIcon>
      </CardImageBox>
      <CardContent className="content">
        <GroupCardItem justifyContent="flex-start">
          <h3>{product?.productName}</h3>
        </GroupCardItem>
        <GroupCardItem justifyContent="flex-start">
          <p>{product?.description}</p>
        </GroupCardItem>
        <GroupCardItem direction="row">
          <small>
            <FaStar color="#FFE83B" />
            <Rating>4.9</Rating>
            <span className="span">|</span>
            <span>{product?.stock}</span>
          </small>
          <Price>{product?.price}</Price>
        </GroupCardItem>
      </CardContent>
    </CardWrapper>
  );
};

export default ProductCard;

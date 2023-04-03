import styled from "styled-components/macro";

type Props = {
  justifyContent?: string;
  bgColor?: string;
  padding?: string;
  border?: string;
  textAlign?: string;
  selfAlign?: string;
  gap?: string;
  smHeight?: string;
  size?: string;
  selected?: boolean;
  direction?: string;
  height?: string;
};

export const Wrapper = styled.div<Props>`
  padding: 0.5rem 0;
  background-color: rgb(242 242 243);
  height: 55vh;
  margin-bottom: 2rem;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 600;
  margin: 0;
  color: #333446;
  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`;
export const More = styled.p`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 600;
  margin: 0;
  color: #6eb6a3;
  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;

export const CardGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));

  gap: 20px;
  padding: 3rem 0;
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
    gap: 15px;
    padding: 0 0 3rem 0;
  }
  @media (max-width: 320px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    gap: 15px;
  }
`;

export const CardWrapper = styled.div<Props>`
  border-radius: 2px;
  min-height: 150px;
  transition: all 1s ease;
  display: flex;
  flex-direction: column;
  background-color: rgb(242 242 243);

  overflow: hidden;
  animation: fadeIn 2s;
  cursor: pointer;
  h3,
  p {
    text-transform: capitalize;
  }
  &:hover {
    box-shadow: 2px 5px 4px rgba(0, 0, 0, 0.16);
    .content {
      background-color: #fff;
      padding: 0.5rem;
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const CardImageBox = styled.div<Props>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${({ height }) => height || "220px"};
  padding: ${({ padding }) => padding || "0"};
  position: relative;
  img {
    width: 100%;
    object-fit: contain;
    height: 100%;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  @media (max-width: 480px) {
    max-height: ${({ smHeight }) => smHeight || "170px"};
  }
`;
export const CardContent = styled.div`
  padding: 1rem;
  p {
    text-overflow: ellipsis;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 0.8rem;
    height: 35px;
  }
  @media (max-width: 480px) {
    h3 {
      font-size: 1rem;
    }
    padding: 0.5rem 0;
  }
`;
export const LikeIcon = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 12px;
  right: 0px;
  z-index: 1;
  height: 35px;
  width: 35px;
  @media (max-width: 400px) {
    top: 25px;
  }
  @media (max-width: 320px) {
    top: 5px;
    right: 55px;
  }
`;
export const GroupCardItem = styled.div<Props>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  align-items: center;
  gap: ${({ gap }) => gap};
  flex-direction: ${({ direction }) => direction || "column"};
  padding: 0.3rem 0;
  small {
    color: #d8d8da;
  }
  .span {
    margin: 0 0.3rem;
    height: 0.5rem;
    font-size: 0.75rem;
  }
  h3 {
    color: #d8d8da;
    font-weight: 500;
  }
  @media (max-width: 480px) {
    align-items: flex-start;
    &:last-of-type {
      padding: 1rem 0 0.5rem 0;
    }
    h3,
    p {
      text-overflow: ellipsis;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 0.875rem;
    }
    h3 {
      margin: 0;
    }
    p {
      color: #333446;
      font-weight: 500;
      padding: 0;
      margin: 0;
    }
  }
`;
export const Rating = styled.span<Props>`
  color: #d8d8da;
  font-size: 0.8rem;
  margin-left: 0.2rem;
`;
export const Price = styled.div<Props>`
  color: #309880;
  font-size: 1rem;
  font-weight: 500;
`;

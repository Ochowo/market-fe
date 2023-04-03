import styled from "styled-components";

export const CarouselItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 500ms ease-in-out;
  max-height: 220px;
  img {
    width: 100%;
    object-fit: contain;
    height: 100%;
  }
`;

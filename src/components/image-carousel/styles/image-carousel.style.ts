import styled from "styled-components";

type ContainerProps = {
  justifyContent?: string;
  alignItems?: string;
  height?: string;
  direction?: string;
  overflowY?: string;
  borderRadius?: string;
  whiteSpace?: string;
  scrollSnapType?: string;
  maxHeight?: string;
  margin?: string;
  width?: string;
  bgColor?: string;
  padding?: string;
  smpadding?: string;
  position?: string;
  zIndex?: string;
  topLeft?: string;
  topRight?: string;
  bottomLeft?: string;
  bottomRight?: string;
  gap?: string;
};
export const Container = styled.div<ContainerProps>`
  display: flex;
  position: ${({ position }) => position};
  gap: ${({ gap }) => gap};
  flex-direction: ${({ direction }) => direction || "column"};
  align-items: ${({ alignItems }) => alignItems};
  margin: ${({ margin }) => margin};
  background-color: ${({ bgColor }) => bgColor};
  width: ${({ width }) => width};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  height: ${({ height }) => height};
  max-height: ${({ maxHeight }) => maxHeight};
  border-radius: ${({ borderRadius }) => borderRadius};
  white-space: ${({ whiteSpace }) => whiteSpace};
  padding: ${({ padding }) => padding};
  z-index: ${({ zIndex }) => zIndex};
  scroll-snap-type: ${({ scrollSnapType }) => scrollSnapType};
  border-top-left-radius: ${({ topLeft }) => topLeft};
  border-top-right-radius: ${({ topRight }) => topRight};
  border-bottom-left-radius: ${({ bottomLeft }) => bottomLeft};
  border-bottom-right-radius: ${({ bottomRight }) => bottomRight};
  overflow-y: ${({ overflowY }) => overflowY};
`;

export const CarouselWrapper = styled.div<ContainerProps>`
  width: 100%;
  height: 30vh;
`;

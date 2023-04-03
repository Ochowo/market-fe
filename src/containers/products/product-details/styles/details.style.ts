import styled from "styled-components";

export const TopBar = styled.div`
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6vh;
`;
export const TopBarItem = styled.div`
  display: flex;
  gap: 5px;
`;
export const Content = styled.div``;

type Props = {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  margin?: string;
  padding?: string;
};
export const DetailsRow = styled.div`
  margin-top: 2rem;
  padding: 0 1.5rem;
`;
export const Text = styled.div<Props>`
  font-size: ${({ fontSize }) => fontSize || "0.875rem"};
  color: ${({ color }) => color || "#c0c1c5"};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: ${({ margin }) => margin};
`;

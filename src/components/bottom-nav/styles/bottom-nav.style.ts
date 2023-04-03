import styled from "styled-components";

type Props = {
  active?: boolean;
};
export const BottomNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  height: 8vh;
  z-index: 99;
`;

export const BottomNavigationList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  align-items: center;
`;

export const BottomNavigationItem = styled.li<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  color: ${({ active }) => (active ? "#333" : "#999")};
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: ${(active) => (active ? "bold" : "normal")};
`;

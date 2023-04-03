import styled from "styled-components/macro";

type Props = {
  active?: boolean;
  showBorder?: boolean;
};

export const TabWrapper = styled.div<Props>`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
    .filter {
      position: relative;
      right: 10px;
    }
  }
`;
export const TabInner = styled.div`
  display: flex;
  gap: 5rem;
  width: 100%;
  border-bottom: 1px solid rgb(192, 193, 197);
  margin: 0 1.5rem;
`;
export const Tab = styled.div<Props>`
  position: relative;
  white-space: nowrap;
  transition: color 0.5s linear;
  color: ${({ active }) => (active ? "2A977E" : "#c0c1c5")};
  font-weight: ${({ active }) => (active ? "600" : "")};
  padding: 1rem 0;
  font-size: 0.875rem;
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    transition: border-color 0.5s linear;
    left: 0px;
    right: 0px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: -5px;
    bottom: 0px;
    border-bottom: ${({ active }) => (active ? "6px solid #2A977E" : "none")};
    border-radius: 8px;
  }
`;

export const Body = styled.div`
  margin: 0 1.5rem;
  border-bottom: 1px solid rgb(192, 193, 197);
  padding-bottom: 1rem;
`;

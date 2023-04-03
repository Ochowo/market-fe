import styled from "styled-components";

type Props = {
  position?: string;
  left?: string;
  top?: string;
  right?: string;
  alignItems?: string;
  flex?: number;
  gap?: string;
  smright?: string;
  smtop?: string;
};

export const NavWrapper = styled.div<Props>`
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const IconContainer = styled.div<Props>`
  display: inline-flex;
  alignitems: flex-start;
`;
export const Superscript = styled.sup<Props>`
  position: absolute;
  top: ${({ top }) => top || "22px"};
  right: ${({ right }) => right || "58px"};
  background-color: #e55a86;
  border-radius: 4px;
  font-weight: 300;
  display: flex;
  cursor: pointer;
  justify-content: center;
  width: 23px;
  height: 18px;
  color: #fff;
  font-size: 12px;
  align-items: center;
  @media (max-width: 380px) {
    right: ${({ smright }) => smright};
    top: ${({ smtop }) => smtop};
  }
`;
export const NavItem = styled.div<Props>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  flex: ${({ flex }) => flex};
  gap: ${({ gap }) => gap};
  input {
    border: 1px solid #626060;
    background-color: transparent;
    border-radius: 7px;
    height: 30px;
    flex: 1;
    margin-right: 10px;
  }
`;

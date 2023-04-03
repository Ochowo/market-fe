import styled from "styled-components";

export const MenuRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 10vh;
`;

export const MenuDiv = styled.div`
  font-size: 1.5rem;
  margin-right: 0.5rem;
  background-color: #f6f6f6;
  border-radius: 4px;
  width: 20px;
  height: 20px;
  padding: 0.5rem;
`;
export const Label = styled.div`
  color: #aeaeae;
  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

import { Container } from "../image-carousel/styles/image-carousel.style";
import { Label, MenuDiv } from "./styles/menu.style";

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
}

const MenuItem = ({ icon, label }: MenuItemProps) => {
  return (
    <Container justifyContent="center" alignItems="center">
      <MenuDiv>{icon}</MenuDiv>
      <Label>{label}</Label>
    </Container>
  );
};

export default MenuItem;

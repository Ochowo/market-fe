import {
  CiGrid41,
  CiMobile4,
  CiMoneyBill,
  CiPlane,
  CiReceipt,
} from "react-icons/ci";
import MenuItem from "./menu-item";

import { MenuRow } from "./styles/menu.style";

const Menu = () => {
  return (
    <MenuRow>
      <MenuItem label="Category" icon={<CiGrid41 color="#89898D" />} />
      <MenuItem label="Flight" icon={<CiPlane color="#89898D" />} />
      <MenuItem label="Bill" icon={<CiReceipt color="#89898D" />} />
      <MenuItem label="Data plan" icon={<CiMobile4 color="#89898D" />} />
      <MenuItem label="Top Up" icon={<CiMoneyBill color="#89898D" />} />
    </MenuRow>
  );
};

export default Menu;

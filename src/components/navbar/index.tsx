import { FiShoppingBag, FiMessageSquare } from "react-icons/fi";
import IconWithSuperscript from "./icon-with-supercript";
import { NavItem, NavWrapper } from "./style";

const Navbar = () => {
  return (
    <NavWrapper className="search-bar">
      <NavItem alignItems="center" flex={1}>
        <input type="text" placeholder="Search" />
      </NavItem>
      <NavItem gap="30px">
        <IconWithSuperscript
          icon={<FiMessageSquare color="#4A4A5A" fontSize="24" />}
          superscript="1"
          smright="57px"
          smtop="15px"
        />
        <IconWithSuperscript
          right="15px"
          smright="5px"
          smtop="16px"
          icon={<FiShoppingBag color="#4A4A5A" fontSize="24" />}
          superscript="9+"
        />
      </NavItem>
    </NavWrapper>
  );
};

export default Navbar;

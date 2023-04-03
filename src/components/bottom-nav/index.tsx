import { FaHome } from "react-icons/fa";
import { CiBarcode, CiCreditCard2, CiSun } from "react-icons/ci";
import {
  BottomNavigation,
  BottomNavigationList,
  BottomNavigationItem,
} from "./styles/bottom-nav.style";

const BottomNav = () => {
  return (
    <BottomNavigation>
      <BottomNavigationList>
        <BottomNavigationItem active>
          <FaHome size="24px" color="309880" />
          <span>Home</span>
        </BottomNavigationItem>
        <BottomNavigationItem>
          <CiBarcode size="24px" />
          <span>Voucher</span>
        </BottomNavigationItem>
        <BottomNavigationItem>
          <CiCreditCard2 size="24px" />
          <span>Wallet</span>
        </BottomNavigationItem>
        <BottomNavigationItem>
          <CiSun size="24px" />
          <span>Settings</span>
        </BottomNavigationItem>
      </BottomNavigationList>
    </BottomNavigation>
  );
};
export default BottomNav;

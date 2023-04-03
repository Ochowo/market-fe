import Aos from "aos";
import { useEffect } from "react";
import ProductContainer from "../containers";

const Page = () => {
  useEffect(() => {
    const navbar = document.querySelector(".navbar") as HTMLElement;
    const header = document.querySelector(".header") as HTMLElement;
    if (navbar && header) {
      const navbarOffsetTop = navbar.offsetTop;
      window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition >= navbarOffsetTop) {
          header.classList.add("fixed");
          navbar.classList.add("sticky-nav");
        } else {
          navbar.classList.remove("sticky-nav");
          header.classList.remove("fixed");
        }
      });
    }
  }, []);
  useEffect(() => {
    Aos.init();
  }, []);

  return <ProductContainer />;
};

export default Page;

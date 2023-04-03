import { useEffect, useState } from "react";
import { Navbar } from "../components";
import BottomNav from "../components/bottom-nav";
import ImageCarousel from "../components/image-carousel";
import { Container } from "../components/image-carousel/styles/image-carousel.style";
import Menu from "../components/menu";
import { products } from "../data";
import ProductDetails from "./products/product-details";
import Products from "./products/product-list";

const ProductContainer = () => {
  // const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const navbar = document.querySelector(".navbar") as HTMLElement;
    const header = document.querySelector(".header") as HTMLElement;

    if (navbar && header) {
      const navbarOffsetTop = navbar.offsetTop;

      // add a scroll event listener to the window
      window.addEventListener("scroll", () => {
        // get the current scroll position
        const scrollPosition = window.scrollY;

        // add or remove the 'sticky' class depending on the scroll position
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
  const [details, setDetails] = useState(false);
  return (
    <div className="container">
      {" "}
      {details ? (
        <ProductDetails
          className={`${details ? "animate-on-load" : ""}`}
          onClick={() => setDetails(false)}
        />
      ) : (
        <Container maxHeight="100vh">
          <header className="header">
            <Navbar />
          </header>
          <main>
            <ImageCarousel />
            <Menu />
            <Products onClick={() => setDetails(true)} products={products} />
          </main>

          <BottomNav />
        </Container>
      )}
    </div>
  );
};

export default ProductContainer;

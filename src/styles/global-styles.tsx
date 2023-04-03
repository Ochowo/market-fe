import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    font-family: 'Inter', sans-serif;
};
body{
    padding:0;
    margin:0;
    width:100%;
}
.container .details{
    transform: translateY(130%);
    transition-timing-function: ease-in;
    transition: 20s;
  }
  .container.details-is-shown .details {
    transition: 0.25s;
    transition-timing-function: ease-out;
    
    transform: translateY(0);
    opacity: 1;
  }
  .details{
    width: 90%;
    background-color: #fff;
    box-shadow: 0 5px 15px rgba(black, 0.2);
    position: absolute;
    z-index: 1000;
  }
  .hidden{
    display: none;
  }
  header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }
  
  .search-bar {
    padding: 5%;
    z-index: 99;
  }
  
  .sticky-nav {
    position: sticky;
    top: 50px; /* adjust as needed to position the nav just beneath the search bar */
    background-color: rgb(242 242 243);
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    top: 9%;
  }
  .fixed{
    position: fixed;
    background-color: #fff;
    z-index: 99;
  }
  .animate-on-load {
    opacity: 0;
    transform: translateY(50px);
    animation: slide-in 2s ease forwards;
  }
  
  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

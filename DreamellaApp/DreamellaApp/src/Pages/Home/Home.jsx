// import Header from '../../Components/Header/Header'
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer.jsx";

import "./Home.css";
// import imgg from './Images/IMG_20240326_145158_533 1.png'

// import Perfumes from './Data/AllPefume.json'
import perfumes from "../../AllPefume.json";
import { Link } from "react-router-dom";

function Home() {
  const productsLinks = [
    "All",
    "Mini Perfumes",
    "Oil Perfumes",
    "Designers Perfumes",
    "Arabian Perfumes",
    "Deodorants",
    "More",
  ];
  return (
    <div className="home">
        
      <Header />
      {/* <header>
                <nav className='navbar'>
                <object className='logo' type="image/svg+xml" data= {Logo}></object>
                <SearchBar/>
                <div className="loginAndCartWrapper">
                    <h1>Login</h1>
                    <object className='cartIcon' type="image/svg+xml" data= {CartIcon}></object>
                </div>
                </nav>
            </header> */}
      <main>
        <div className="HeroSection">
          <div className="websiteInfo">
            <div className="siteName">
              <p>Dreamella Emporium</p>
            </div>
            <div className="siteSlogan">
              <p>Enhancing confidence levels</p>
            </div>
          </div>
        </div>
        <div className="productsNavigation">
          <div className="productsLinkWrapper">
            {productsLinks.map((product, index) => (
              <div className="productsLists">{product}</div>
            ))}
          </div>
        </div>
        <div className="productWrapper">
          {perfumes.map((perfume) => {
            return (
              <div className="card" key={perfume.id}>
               
                  <div className="productFrame">
                  <Link to={`/perfume/${perfume.id}`}>
                    <div className="imgWrapper">
                      {/* <img src={imgg} alt={perfume.perfumeName} />
                                        //  <img src={perfume.image} alt={perfume.perfumeName} /> */}
                      <img src={perfume.url} alt={perfume.perfumeName} />
                    </div>
                    <div className="productName">
                      <p>{perfume.perfumeName}</p>
                    </div>
                    <div className="productPrice">
                      <p>{perfume.price}</p>
                    </div>
                    </Link>
                    <Link to={`/cart/${perfume.id}`}><button>Add to cart</button></Link>
                  </div>
               
              </div>
            );
          })}
        </div>
        <div className="paginationBar">
          <div className="backArrowDiv">
            <svg
              width="21"
              height="16"
              viewBox="0 0 21 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.292893 8.70711C-0.0976311 8.31658 -0.0976311 7.68342 0.292893 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292893 8.70711ZM21 9H1V7H21V9Z"
                fill="#C4C4C4"
              />
            </svg>
          </div>
          <div className="otherPages">
            <ul className="otherPagesLinkWrapper">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>...</li>
              <li>10</li>
            </ul>
          </div>
          <div className="forwardArrowDiv">
            <svg
              width="21"
              height="16"
              viewBox="0 0 21 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;

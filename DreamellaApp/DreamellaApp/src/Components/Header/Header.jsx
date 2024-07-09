// import Logo from '../Home/assets/logo.svg'
// import CartIcon from '../Home/assets/cart.svg'
// import SearchBar from '../../Components/SearchBar/SearchBar'

import Logo from "../Header/assets/logo.svg";
import CartIcon from "../Header/assets/cart.svg";
import SearchBar from "../SearchBar/SearchBar";
import mobileLogo from "./assets/mobileLogo.svg";
import mobileSearch from "./assets/mobileSearch.svg";
import mobileCart from "./assets/mobileCart.svg";
import "../Header/Header.css";

function Header() {
  return (
    <nav className="navbar">
      <div className="largeScreenNav">
        <object className="logo" type="image/svg+xml" data={Logo}></object>
        <div className="searchBarContainer">
          <SearchBar />
        </div>
        <object
          className="cartIcon"
          type="image/svg+xml"
          data={CartIcon}
        ></object>
      </div>

      <div className="mobileScreenNav">
        <div className="navbarWrapper">
          <div className="mobileLogoWrapper">
            <object
              className="logo"
              type="image/svg+xml"
              data={mobileLogo}
            ></object>
          </div>
          <div className="iconandCartWrapper">
            <object
              className="logo"
              type="image/svg+xml"
              data={mobileSearch}
            ></object>
            <object
              className="logo"
              type="image/svg+xml"
              data={mobileCart}
            ></object>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

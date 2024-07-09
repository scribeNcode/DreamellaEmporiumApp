import { useParams } from "react-router-dom";
import perfumes from "../../AllPefume.json";
import Logo from "../../Components/Header/assets/logo.svg";
import Arrow from "./assets/Arrow 2.svg";
import starIcon from "./assets/Star 2.svg";
import minus from "./assets/minus.svg"
import plus from "./assets/plus.svg"
import Footer from "../../Components/Footer/Footer";

import "../ProductsDetails/ProductsDetails.css";

function ProductsDetails() {
  let { id } = useParams();
  const fume = perfumes.find((p) => p.id === parseInt(id));

  if (!fume) {
    return <div>Product not found</div>;
  }

  // let {id} = useParams()
  // console.log(perfumes)
  const imagePath = `../../../public/${fume.url}`;
  return (
    <>
      <header className="productsDetailsHeader">
        <object className="logo" type="image/svg+xml" data={Logo}></object>
      </header>
      <main className="productsDetailsMain">
        <div className="navigationContainer">
          <object className="logo" type="image/svg+xml" data={Arrow}></object>
          <p>Back</p>
        </div>
        <div className="productDetails">
          <div
            className="productImageDiv"
            style={{ backgroundImage: `url(${imagePath})` }}
          ></div>
          <div>{/* Content within the div */}</div>
          <div className="productInfo">
            <div>
              {" "}
              <p className="perfumeName">{fume.perfumeName}</p>
            </div>
            <div>
              {" "}
              <p className="perfumePrice">{fume.price}</p>
            </div>
            <div className="ratingDiv">
              <div className="ratingIcons">
                <object
                  className="logo"
                  type="image/svg+xml"
                  data={starIcon}
                ></object>
                <object
                  className="logo"
                  type="image/svg+xml"
                  data={starIcon}
                ></object>
                <object
                  className="logo"
                  type="image/svg+xml"
                  data={starIcon}
                ></object>
                <object
                  className="logo"
                  type="image/svg+xml"
                  data={starIcon}
                ></object>
                <object
                  className="logo"
                  type="image/svg+xml"
                  data={starIcon}
                ></object>
              </div>
              <div className="ratingText">
                <p>(No Ratings)</p>
              </div>
            </div>
            <div className="availability">
              <p>Available</p>
            </div>
            <div className="setNumDiv">
              <div className="minusDiv">
              <object
                  className="logo"
                  type="image/svg+xml"
                  data={minus}
                ></object>
              </div>
              <div className="counter">1</div>
              <div className="addition">
              <object
                  className="logo"
                  type="image/svg+xml"
                  data={plus}
                ></object>
              </div>
            </div>
            <div className="addToCartButton">
                <p>Add to cart</p>
              </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default ProductsDetails;

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import perfumes from "../../AllPefume.json";
import minus from "./assets/minus.svg";
import plus from "./assets/plus.svg";
import deleteIcon from "./assets/deleteIcon.svg";

import "../Cart/Cart.css";
function Cart() {
  let { id } = useParams();
  const fume = perfumes.find((p) => p.id === parseInt(id));

  if (!fume) {
    return <div>Product not found</div>;
  }

  const imagePath = `../../../public/${fume.url}`;

  return (
    <div className="cartPageWrapperr">
        <div className="progressBar">
            <div className="progressIcons" >
                <p className="FirstprogressNumIcon">1</p>
              <div className="stroke"></div>
              <p className="progressNumIcon">2</p>
              <div className="stroke"></div>
              <p className="progressNumIcon">3</p>
            </div>
            <div className="progressShipingText">
                <p className="progresscart">Cart</p>
                <p className="progressShiping">Shipping</p>
                <p>Payment</p>
            </div>
        </div>
       <div className="sectionOne">
      <div className="cartImage">
        <div className="cartImageWrapper">
          <div
            className="productImageDiv"
            style={{ backgroundImage: `url(${imagePath})` }}
          ></div>
        </div>
        <div className="cartImageName">{fume.perfumeName}
        </div>
      </div>
      <div className="cartInfo">
        <div className="numberSection">
          <object className="minus" type="image/svg+xml" data={minus}></object>
          <div className="counterNum">1</div>
          <object className="plus" type="image/svg+xml" data={plus}></object>
          <div className="AmountInCart">{fume.price}</div>
        </div>
        <div className="deleteSection">
          <object
            className="plus"
            type="image/svg+xml"
            data={deleteIcon}
          ></object>
          <p>Remove</p>
        </div>
      </div>
    </div> 
    <div className="sectionTwo">
        <div className="cartInstruction">
            <div className="cartTotal">
                <p>Cart Total</p>
                <p className="fumePrice">{fume.price}</p>
            </div>
            <div className="shippingPrompt">
                <p>Shipping fee will be added when checking out.</p>
            </div>
        </div>
        <div className="shippingCallToAction">
            <button>Continue Shopping</button>
            <button className="checkoutButton">Proceed to Checkout</button>
            
        </div>
    </div>
    </div>
    
  );
}

export default Cart;

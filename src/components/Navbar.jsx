// import { AiOutlineShopping } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateContext";
import Cart from "./Cart";
import cartIcon from "../assets/cartIcon2.png";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <nav className="navbar-container">
      <div className="logo">
        <Link to="/">Saranti</Link>
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link className="btn" to="/about-page">
              About
            </Link>
          </li>
          <li>
            <Link className="btn" to="/shop-page">
              Shop
            </Link>
          </li>
          <li>
            <Link className="btn" to="/blog-page">
              Blog
            </Link>
          </li>
        </ul>
        <div className="tooltip">
          <button
            type="button"
            className="cart-icon"
            onClick={() => setShowCart(true)}
            aria-label="View cart">
            <img src={cartIcon} alt="Custom Icon" />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>
          <span className="tooltiptext">View cart</span>
        </div>
      </div>

      {showCart && <Cart />}
    </nav>
  );
};

export default Navbar;

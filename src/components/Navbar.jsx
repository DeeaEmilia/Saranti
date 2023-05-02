import { AiOutlineShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';
import Cart from './Cart';

const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext();
    return (
        <div className="navbar-container">
            <p className="logo">
                <Link to="/">Gadgeteen Headphones</Link>
            </p>

            <button
                type="button"
                className="cart-icon"
                onClick={() => setShowCart(true)}
            >
                <AiOutlineShopping />
                <span className="cart-item-qty">{totalQuantities}</span>
            </button>

            {showCart && <Cart />}
        </div>
    );
};

export default Navbar;

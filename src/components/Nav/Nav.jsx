import "./Nav.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";

export const Nav = () => {
  const { getTotalItems } = useCartContext();

  return (
    <nav className="navbar">
      <div className="titulo">
        <h3>Panaderia Puchi</h3>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/category/dulce">Dulce</Link>
        </li>
        <li>
          <Link to="/category/salado">Salado</Link>
        </li>
        <li className="cart-link">
          <Link to="/cart">Carrito 🛒</Link>
          {getTotalItems() > 0 && (
            <span className="in-cart">{getTotalItems()}</span>
          )}
        </li>
      </ul>
    </nav>
  );
};

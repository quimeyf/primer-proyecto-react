import "./ItemList.css";
import { Link } from "react-router-dom";
import { Item } from "../Item/Item";

export const ItemList = ({ list }) => {
  return (
    <div className="product-grid">
      {list.length ? (
        list.map((prod) => (
          <div className="product-card" key={prod.id}>
            <Link to={`/detail/${prod.id}`}>
              <Item {...prod} />
            </Link>
          </div>
        ))
      ) : (
        <p>No hay productos</p>
      )}
    </div>
  );
};

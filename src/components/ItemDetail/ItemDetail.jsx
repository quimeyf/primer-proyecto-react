import { useCartContext } from "../../context/CartContext/useCartContext";
import { Count } from "../Count/Count";
import "./ItemDetail.css";

export const ItemDetail = ({ detail }) => {
    const { addItem } = useCartContext();

    const handleAdd = (quantity) => {
        addItem({ ...detail, quantity });
    };

    return (
        <div className="item-detail-container">
            <div className="item-detail-card">
                <img src={detail.imageUrl} alt={detail.name} />

                <h2 className="item-detail-title">{detail.name}</h2>

                <p className="item-detail-description">{detail.description}</p>

                <p className="item-detail-price">${detail.price}</p>

                <Count btnText="Agregar al carrito" onConfirm={handleAdd} />
            </div>
        </div>
    );
};

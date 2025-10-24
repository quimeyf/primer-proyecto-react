import{ CartContext } from "./CartContext";
export const CartProvider = (children) => {
    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}
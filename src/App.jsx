import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Cart } from "./components/Cart/Cart";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";

function App() {
  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" 
          element={<ItemListContainer/>} 
          />
          <Route path="/category/:category" 
          element={<ItemListContainer/>} 
          />
          <Route path="/detail/:id" element={<ItemDetailContainer  />}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/admin" element={<ProductFormContainer/>}/>

        </Routes>
        <Footer/>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App

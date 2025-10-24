import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

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
          <Route path="/detail/:id" element={<ItemDetailContainer  />}/>
        </Routes>
        <Footer/>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App

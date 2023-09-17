import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemList/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer"
import CartProvider from "./context/CartProvider"
import CartView from "./components/Cart/CartView"
import CheckOut from "./components/Checkout/checkOut";

function App() {


  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/cart/checkout" element={<CheckOut />} />
      </Routes>
    </CartProvider>
  )
}

export default App

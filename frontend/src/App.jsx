import "./App.css";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/Navbar/NavBar";
import Header from "./Components/Header/Header";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LayoutDetails from "./Components/LayoutDetails/LayoutDetails";
import { AppProvider } from "./context/AppContext";
import AddToCart from "./Components/AddToCart/Cart";
import CartProvider from "./context/CartContext";
import UploadBase from "./Components/UploadBase/UploadBase";

function App() {
  return (
    <AppProvider>
      <CartProvider>
        <Router>
         <NavBar />
          <Routes>
            <Route exact path="/" element={<Hero />} />
            <Route path="/header" element={<Header />} />
            <Route path="/cart" element={<AddToCart />} />
            <Route path="/upload" element={<UploadBase />} />
            <Route path="/header/layout" element={<LayoutDetails />} />
          </Routes>
        </Router>
      </CartProvider>
    </AppProvider>
  );
}

export default App;

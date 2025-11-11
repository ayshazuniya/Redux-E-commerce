
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home"
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/LoginPage"
import ProtectedRoute from "./Components/ProtectedRoute";
import ProductDetails from "./Components/ProductDetails";


function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/products/:id" element={<ProductDetails />} />
        
      </Routes>
       <Footer/>
    </>
  );
}

export default App;

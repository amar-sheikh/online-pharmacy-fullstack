import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NewsLetter from "./Components/Home/NewsLetter/NewsLetter";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import AllProducts from "./Components/Products/AllProducts/AllProducts";
import SingleProducts from "./Components/SingleProducts/SingleProducts";
import AppContext from "./utils/Context";
import CategoryProducts from "./Components/Category/CategoryProducts";
import BrandProducts from "./Components/Brand/BrandProducts";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Cart />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/category/:id" element={<CategoryProducts />} />
          <Route path="/brand/:id" element={<BrandProducts />} />
          <Route path="/product/:id" element={<SingleProducts />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <NewsLetter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;

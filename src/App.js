import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Contact from "./components/Contact";




function App() {
  return (

    <div>

      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />

    </div>

  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./../Pages/Home";
import { Product } from "./../Pages/Product";
import { About } from "../Pages/About";
import { Contact } from "../Pages/Contact";

export function AppRoutes() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
         </Routes>
      </BrowserRouter>
   );
}

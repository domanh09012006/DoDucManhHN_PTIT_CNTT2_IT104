import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Bai1/Home";
import About from "./component/Bai1/About";
import Contact from "./component/Bai1/Contact";
import Bai3 from "./component/Bai3";
import Bai5 from "./component/Bai5";
import Bai4 from "./component/Bai4";
import Header from "./component/Header";
import Product from "./page/Product";
import Detail from "./page/Detail";
import CustomLink from "./component/CustomLink";
import HomePage from "./page/HomePage";
import NotFound from "./page/NotFound";

export default function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/login" element={<Bai3></Bai3>}></Route>
            <Route path="/register" element={<Bai4></Bai4>}></Route>
            <Route path="/*" element={<Bai5></Bai5>}></Route>
          </Route>
        </Routes>
      </BrowserRouter> */}

      {/* Bai6 */}
      {/* <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div> */}

    {/* Bai7 */}
    <Routes>
      <Route path="/" element={<CustomLink />} />
      <Route path="/home-page" element={<HomePage />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

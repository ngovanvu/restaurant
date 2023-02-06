import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routers from "../../routers/Routers";

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Routers></Routers>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

import React, { useState } from "react";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Hamburger from "./Components/Hamburger";

const App = () => {
  const [burger, setBurger] = useState(false);
  return (
    <div>
      <Hamburger burger={burger} setBurger={setBurger} />
      <Navbar burger={burger} setBurger={setBurger} />
      <Home />
      <Footer />
    </div>
  );
};

export default App;

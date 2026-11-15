import React from "react";
import Navbar from "./assets/Nav";
import Herocard from "./assets/Herocard";
import CategoryCards from "./assets/card";
import FreshDrops from "./assets/Product";
import Community from "./assets/Community";
import Footer from "./assets/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Herocard />
      <CategoryCards />
      <FreshDrops />
      <Community />
      <Footer />
    </div>
  );
};

export default App;

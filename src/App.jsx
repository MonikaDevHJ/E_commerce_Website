import { useState } from "react";

import "./App.css";
import { Outlet } from "react-router-dom";
import NavItems from "./components/Navitems.jsx";
import Blog from "./blog/Blog.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavItems />
      <div className="min-vh-100">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;

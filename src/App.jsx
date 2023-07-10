import { Outlet } from "react-router-dom"

// Components
import { Dialog, Footer, Header } from "./components";
import { useState } from "react";

const App = () => {
  const [isAdding, setIsAdding] = useState(true)

  return (
    <div className="app-wrapper">
      <div className="header-wrapper">
        <Header />
      </div>
      <div className="content-wrapper">
        <Outlet />
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default App;

import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import MenuBakery from "./components/MenuBakery";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import logo from "./assets/Bakery.webp";
import { OrderProvider } from "./Context/OrderContext";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <OrderProvider>
      <div className="App">
        <header className="header">
          <img src={logo} alt="JA Bakery Logo" className="logo-img" />
          <h1 className="bakery-title"> JA Bakery</h1>

          <nav className="nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </nav>
        </header>
<AppRoutes />
            </div>
    </OrderProvider>
  );
}

export default App;

// <div className="app-container"> {/* Added a container div for better structure */}
//
//     <div className="logo-container">
//       <img src={logo} alt="JA Bakery Logo" className="logo-img" />
//     </div>
//
//   </header>

//   <main className="main-content">
//     <Routes>
//       <Route path='/' element={<Home />} />
//     </Routes>
//   </main>
//   </div>

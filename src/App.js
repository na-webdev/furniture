import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/AddPage";
import Edit from "./pages/EditPage";
import { useState, createContext } from "react";
import productsList from "./data";

const UserContext = createContext();


function App() {
  const [products, setProducts] = useState(productsList);
  return (
    <UserContext.Provider value={{
      products,
      changeProducts: setProducts,
    }}>
      <section className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </section>
    </UserContext.Provider>
  );
}

export default App;
export { UserContext }

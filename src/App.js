import React from "react";
import Cart from "./Cart";
import { AppContext } from "./Store";
import Header from "./Header";
import "./styles.css";

export default function App() {
  return (
    <AppContext>
      <div className="container">
        <Header />
        <Cart />
      </div>
    </AppContext>
  );
}

import React from "react";
import ItemList from "./ItemList";
import Totals from "./Totals";

export default function Form() {
  return (
    <div className="row">
      <Totals />
      <ItemList />
    </div>
  );
}

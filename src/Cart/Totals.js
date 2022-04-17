import React, { useEffect, useState, useContext, useCallback } from "react";
import { deleteCart } from "../Actions";
import { store } from "../Store";

export default function ItemTotalList() {
  const [totalValue, setTotalValue] = useState(0);
  const {
    dispatch,
    state: { cart, total }
  } = useContext(store);
  const onDeleteToCart = useCallback(
    (product) => {
      dispatch(deleteCart(product));
    },
    [dispatch]
  );


  useEffect(() => {
    const totalTotal = total.reduce(
      (previousValue, currentValue) => {
        return currentValue.price + previousValue
      },
      0
    );
    setTotalValue(totalTotal)
  }, [total]);


  return (
    <div className="col-md-4 order-md-2 mb-4">
      <div className="sticky-top" style={{ top: "1em" }}>
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Your cart</span>
          <span className="badge badge-secondary badge-pill">
            {cart.length}
          </span>
        </h4>
        <ul className="list-group mb-3">
          {cart.map((product, i) => (
            <li
              key={i}
              className="list-group-item justify-content-between lh-condensed"
            >
              <div>
                <div>
                  <h6 className="my-0">{product.name}</h6>
                </div>
                <span className="text-muted">${product.price}</span>
              </div>
              <button type="button" className="btn btn-outline-danger btn-sm" style={{ marginTop: '0.5rem' }} onClick={() => onDeleteToCart(product)} >Remove</button>
            </li>
          ))}
        </ul>
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between">
            <span>Total</span>
            <strong>${totalValue}</strong>
          </li>
        </ul>
        <form className="card p-2">
          <button type="submit" className="btn btn-success ">
            Proceed to checkout
          </button>
        </form>

        <p className="text-muted">
          After the user clicks the [Add to cart] button, the added product
          should appear in the list at the top.
          <br />
          Total should be updated each time a product is added
        </p>
      </div>
    </div>
  );
}

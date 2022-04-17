import React, { useContext, useEffect, useCallback } from "react";
import { getProducts, addToCart } from "../Actions";
import { store } from "../Store";

export default function ItemList() {
  const {
    dispatch,
    state: { products }
  } = useContext(store);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const onAddToCart = useCallback(
    (product) => {
      dispatch(addToCart(product));
    },
    [dispatch]
  );
  return (
    <div className="col-md-8 order-md-1">
      {products.map((product) => (
        <div key={product.id} className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-body text-right">
                <p className="card-text">
                  <strong>${product.price}</strong>
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => onAddToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <p className="text-muted">
        When the page loads, the script should send a GET request to the
        "urls.products", written in config.json <br />
        The result should appear as a list, in this window
      </p>
    </div>
  );
}

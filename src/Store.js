import React, { createContext, useReducer } from "react";
import { getProducts, setProducts, addToCart, deleteCart } from "./Actions";

const initialState = {
  total: [],
  cart: [],
  products: []
};


export const store = createContext(initialState);
const { Provider } = store;

export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case getProducts.type: {
        return state;
      }
      case setProducts.type: {
        const newState = {
          ...state,
          products: action.payload
        };
        return newState;
      }
      case addToCart.type: {
        const cartsWithNewId = [
          {
            description: action.payload.description,
            name: action.payload.name,
            price: action.payload.price,
            id: window.crypto.randomUUID()
          }
        ]
        state.cart.forEach((product) => {
          const productWithNewId = {
            description: product.description,
            name: product.name,
            price: product.price,
            id: window.crypto.randomUUID()
          }
          cartsWithNewId.push(productWithNewId)
        })
        const newState = {
          ...state,
          cart: cartsWithNewId,
          total: cartsWithNewId
        };
        return newState;
      }
      case deleteCart.type: {
        const productId = action.payload.id;
        const deletedCart = state.cart.filter((product) => product.id !== productId)

        const newState = {
          ...state,
          cart: [...deletedCart],
          total: [...deletedCart]
        };
        return newState;
      }

      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

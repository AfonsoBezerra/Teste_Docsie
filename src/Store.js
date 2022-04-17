import React, { createContext, useEffect, useReducer } from "react";
import { getDataApi } from "./services/getDataApi";
import { getProducts, setProducts, addToCart, deleteCart } from "./Actions";
import * as uuid from "uuid";
const initialState = {
  total: [],
  cart: [],
  products: []
};

const URL_DATA_FeTCH = () =>
  "https://run.mocky.io/v3/769972bd-b240-4e45-b409-69898c096b8d";

export const store = createContext(initialState);
const { Provider } = store;

export const AppContext = ({ children }) => {
  async function fetchData() {
    try {
      const dataFetch = await getDataApi(URL_DATA_FeTCH());
      dispatch(setProducts(dataFetch.data));
    } catch {
      console.log("Error in Fetch");
    }
  }

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
            id: uuid.v4()
          }
        ]
        state.cart.forEach((product) => {
          const productWithNewId = {
            description: product.description,
            name: product.name,
            price: product.price,
            id: uuid.v4()
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

  useEffect(() => {
    fetchData();
  }, []);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

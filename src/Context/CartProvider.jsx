import { createContext, useReducer } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();
const initialState = {
  CartItem: [],
};
const cartReducer = (state, action) => {
  console.log("cartReducer", action);
  switch (action.type) {
    case "AddToCart": {
      const isExiting = state.CartItem.find((item) => {
        return item.id === action.payload.id;
      });
      if (isExiting) {
        let updatedProduct = state.CartItem.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, qty: item.qty + 1 };
          }
          return item;
        });

        return {
          ...state,
          CartItem: updatedProduct,
        };
      } else {
        const newCartItems = { ...action.payload, qty: 1 };
        const newCartItemProducts = [...state.CartItem, newCartItems];
        alert(newCartItems.name + "Is added to cart");
        return {
          ...state,
          CartItem: newCartItemProducts,
        };
      }
    }
    case "Increment": {
      const updatedProduct = state.CartItem.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, qty: item.qty + 1 };
        } else {
          return item;
        }
      });
      return {
        ...state,
        CartItem: updatedProduct,
      };
    }

    case "Decrement": {
      const updatedProduct = state.CartItem.map((item) => {
        if (item.id === action.payload.id && item.qty > 1) {
          return { ...item, qty: item.qty - 1 };
        } else {
          return item;
        }
      });
      return {
        ...state,
        CartItem: updatedProduct,
      };
    }

    case "Delete": {
      const filterProducts = state.CartItem.filter((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
      });
      return {
        ...state,
        CartItem: filterProducts,
      };
    }

    case "EmptyCart": {
      return {...state, CartItem:[]}
    }
    default: {
      return state;
    }
  }
};
// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

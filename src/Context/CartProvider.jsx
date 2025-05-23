import { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  CartItem: (() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      try {
        return JSON.parse(cart);
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
        return [];
      }
    }
    return []; 
  })(),
};

const CartReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART": {
      const isExit = state.CartItem.find((item) => item.id === action.payload.id);

      if (isExit) {
        const updatedCart = state.CartItem.map((item) =>
          item.id === action.payload.id
            ? {...item, qty: item.qty + 1}
            : item
        );

        return { ...state, CartItem: updatedCart };
      } else {
        const newCartItem = { ...action.payload, qty: 1 };
        const updateCartItems = [...state.CartItem, newCartItem];

        alert(`${action.payload.name} Added to cart`);

        return {
          ...state,
          CartItem: updateCartItems,
        };
      }
    }

    case "Increment": {
      const updatedCart = state.CartItem.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
      return {
        ...state,
        CartItem: updatedCart,
      };
    }

    case "Decrement": {
      const updatedCart = state.CartItem.map((item) =>
        item.id === action.payload.id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      );
      return {
        ...state,
        CartItem: updatedCart,
      };
    }

    case "Delete": {
      const filteredItems = state.CartItem.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        CartItem: filteredItems,
      };
    }

    case "ClearCart": {
      return {
        ...state,
        CartItem: [],
      };
    }

    default: {
      return state;
    }
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.CartItem));
  }, [state.dispatch]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
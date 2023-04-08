import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const addToCart = (cartItems, product) => {
  const existingProduct = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  if (existingProduct) {
    return cartItems.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

const decrementItemCount = (cartItems, product) => {
  // find item to remove
  const existingProduct = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  // when click if quantity item equal 1 remove this item
  if (existingProduct.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== product.id);
  }

  // return cartItems with cartItem with decrease quantity
  return cartItems.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const removeItem = (cartItems, product) => {
  return cartItems.filter((cartItem) => cartItem.id !== product.id);
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const removeItemFromCart = (procuct) => {
    setCartItems(removeItem(cartItems, procuct));
  };

  const decrementCartItemCount = (product) => {
    setCartItems(decrementItemCount(cartItems, product));
  };

  const addItemsToCart = (product) => {
    setCartItems(addToCart(cartItems, product));
  };
  // count in shopping cart
  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setItemCount(count);
  }, [cartItems]);

  // cart total
  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(count);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemsToCart,
    itemCount,
    setItemCount,
    removeItemFromCart,
    decrementCartItemCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

import React, { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    setCartOpen(true);
  };

  // Remove product
  const removeFromCart = (productId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId)
    );
  };

  // Increase quantity
  const increaseQuantity = (productId) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (productId) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Open cart
  const openCart = () => {
    setCartOpen(true);
  };

  // Close cart
  const closeCart = () => {
    setCartOpen(false);
  };

  // Toggle cart
  const toggleCart = () => {
    setCartOpen((previous) => !previous);
  };

  // Wishlist
  const toggleWishlist = (product) => {
    setWishlist((currentWishlist) => {
      const exists = currentWishlist.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return currentWishlist.filter(
          (item) => item.id !== product.id
        );
      }

      return [...currentWishlist, product];
    });
  };

  // Check wishlist
  const isWishlisted = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  // Cart item count
  const cartCount = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + Number(item.quantity || 0),
      0
    );
  }, [cartItems]);

  // Cart total
  const cartTotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) =>
        total +
        Number(item.price || 0) * Number(item.quantity || 0),
      0
    );
  }, [cartItems]);

  const value = {
    cartItems,
    wishlist,
    cartOpen,
    cartCount,
    cartTotal,

    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,

    openCart,
    closeCart,
    toggleCart,
    setCartOpen,

    toggleWishlist,
    isWishlisted,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// IMPORTANT: Named export used by CartDrawer/ProductCard/Navbar
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
};

export default CartContext;
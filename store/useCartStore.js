import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useCartStore = create(
  devtools(
    persist(
      (set, get) => ({
        cart: [],

        addToCart: (product) =>
          set((state) => ({
            cart: [...state.cart, product],
          })),

        removeFromCart: (productId) =>
          set((state) => ({
            cart: state.cart.filter((item) => item.id !== productId),
          })),

        getCartItems: () => get().cart,

        clearCart: () => set({ cart: [] }),
      }),
      {
        name: "cartItems",
      }
    )
  )
);

export default useCartStore;

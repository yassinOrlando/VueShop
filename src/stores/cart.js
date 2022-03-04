import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    cart: [1, 2, "hola"],
  }),
  getters: {
    getCart: (state) => state.cart,
    getCartLength: (state) => state.cart.length,
  },
  actions: {
    addToCart(prodObj) {
      this.cart.push(prodObj);
    },
  },
});

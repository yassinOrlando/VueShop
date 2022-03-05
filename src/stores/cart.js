import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    cart: [],
  }),
  getters: {
    getCartLength: (state) => state.cart.length,
    getTotalPrice: (state) => {
      let totalPrice = 0;

      state.cart.forEach((prod) => {
        totalPrice += prod.price;
      });

      return totalPrice;
    }
  },
  actions: {
    addToCart(prodObj) {
      this.cart.push(prodObj);
    },
    removeFromCart(prodObj){
      const prodsInCart = this.cart.filter(
        (product) => product.id !== prodObj.id
      );

      this.cart = prodsInCart;
    },
  },
});

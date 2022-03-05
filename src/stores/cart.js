import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    cart: [
      { name: "prod1", description: "this is product 1" }, 
      { name: "prod2", description: "this is product 2" }, 
      { name: "prod3", description: "this is product 3" }
    ],
  }),
  getters: {
    getCartLength: (state) => state.cart.length,
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
    }
  },
});

import { defineStore } from "pinia";
import axios from "axios";
// Product store
export const UseCartStore = defineStore("counter", {
  state: () => ({
    cart: [],
  }),
  actions: {
    AddtoCart(product) {
      const { id } = product;
      let productItm = this.cart.find((item) => {
        return item.id == id;
      });

      if (!productItm) {
        this.cart.push(product);
      }
    },
    RemoveFromCart(product) {
      this.cart = this.cart.filter((item) => item.id !== product.id);
      console.log("remove single product in cart", this.cart);
    },

    Increment_Cart(productId) {
      let productIndex = this.cart.findIndex((item) => {
        return item.id == productId;
      });

      let product = this.cart[productIndex];

      if (product && product.qty < product.stock) {
        product.qty = product.qty++;
        product.totalPrice = product.price * product.qty + product.price;
        console.log("product total price", product.totalPrice);
        console.log("product increment quantity in store", product.qty++);
        console.log("product increment quantity in store object", product);
      } else {
        console.warn("Item is out of stock or not found");
      }
    },

    Decrement_Cart(productId) {
      let productIndex = this.cart.findIndex((item) => {
        return item.id == productId;
      });

      let product = this.cart[productIndex];
      if (product && product.qty > 1) {
        product.qty = product.qty--;
        product.totalPrice = product.price * product.qty - product.price;

        console.log("product decrement quantity in store", product.qty--);
        console.log("product decrement quantity in store object", product);
      }
    },
  },
});

// Form or user auth store
export const UseAuthStore = defineStore("auth", {
  state: () => ({
    user: [],
    userToken: null,
  }),
  actions: {
    
    async setAuthUser(data) {
      const { token } = data;
      this.userToken = token;
      this.user = data;
      let user_token = localStorage.getItem("userToken");
      let user_ = localStorage.getItem("user");
      if (!user_token && !user_) {
        console.log("true");
        localStorage.setItem("userToken", this.userToken);
        localStorage.setItem("user", JSON.stringify(this.user));
      }
    },
    logout() {
      localStorage.removeItem("userToken");
      localStorage.removeItem("user");
      this.user = [];
      this.userToken = null;
    },
  },
});

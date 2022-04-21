import { ref } from "vue";
import { createStore } from "vuex";
export default createStore({
  state: () => ({
    cart: ref([]),
    totalCart: 0,
  }),
  getters: {
    getCart(state) {
      return state.cart;
    },
  },
  mutations: {
    addCart({ cart }, payload) {
      cart.push(payload);
    },
    delete({ cart }, payload) {
      let index = cart.indexOf(payload);

      if (index > -1) {
        cart.splice(index, 1);
      }
    },
  },
  actions: {
    addCart(ctx, payload) {
      ctx.commit("addCart", payload);
    },
    deleteProduct(ctx, payload) {
      ctx.commit("delete", payload);
    },
  },
  modules: {},
});

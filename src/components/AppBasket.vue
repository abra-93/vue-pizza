<template>
  <div class="basket b-shadow">
    <div class="basket__wrap">
      <div class="basket__not-product" v-if="isProducts">
        <h2>Пока нет товаров</h2>
        <p>Вы еще не добавили ничего в корзину</p>
      </div>
      <div v-else class="cart__list">
        <div class="cart__inner">
          <TransitionGroup name="cart-fade" tag="span">
            <AppBasketItem
              v-for="(product, index) in cart"
              :key="index"
              :product="product"
            />
          </TransitionGroup>
        </div>
        <div class="cart__total-price">
          Сумма заказа: <span>{{ 120 }}</span>
        </div>
        <div class="cart__btn">
          <MyBuyButton title="Перейти к оформлению" />
        </div>
      </div>
      <div class="basket__offers">
        <div class="offers__title">Добавить к заказу?</div>
        <swiper
          class="swiper"
          :loop="true"
          :space-between="15"
          slides-per-view="auto"
          :centered-slides="true"
        >
          <swiper-slide
            class="slide"
            v-for="(item, index) in productItem"
            :key="index"
          >
            <AppNewProductItem :product="item" :shadow="false" :border="true" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import AppNewProductItem from "@/components/HomeView/AppNewProductItem.vue";
import AppBasketItem from "@/components/AppBasketItem.vue";
import MyBuyButton from "@/components/UI/MyBuyButton.vue";

import "swiper/css";

const basket = ref(null);
const store = useStore();
const cart = ref(store.state.cart);

const cartList = store.state.cart;
// const { cartList } = defineProps({
//   cartList: {
//     type: Object,
//     default: [],
//   },
// });
const productItem = [
  {
    id: 1,
    name: "Карбонара ",
    img: require("@/assets/images/new-product.png"),
    price: 120,
  },
  {
    id: 2,
    name: "Пеперони",
    img: require("@/assets/images/new-product.png"),
    price: 120,
  },
  {
    id: 3,
    name: "Сырная",
    img: require("@/assets/images/new-product.png"),
    price: 120,
  },
  {
    id: 4,
    name: "Мясная",
    img: require("@/assets/images/new-product.png"),
    price: 120,
  },
];

const isProducts = computed(() => {
  if (!cartList || cartList.length === 0) {
    return true;
  }
  return false;
});
</script>

<style lang="scss" scoped>
.basket {
  max-width: 350px;
  height: auto;
  background: $white-color;
  position: absolute;
  right: 0;
  top: 70px;
  border-radius: 10px;
  // .basket__wrap
  &__wrap {
    padding: 20px;

    h2 {
      text-align: center;
    }
  }

  // .basket__not-product
  &__not-product {
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-align: center;
    margin-bottom: 20px;
    border-bottom: 1px solid $grey-color;
    p {
      color: $grey-color;
    }
  }
  // .basket__offers
  &__offers {
  }
}

.cart {
  &__list {
    margin-bottom: 30px;
  }
  &__inner {
    max-height: 290px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    overflow-y: auto;
    padding-right: 14px;
    margin-bottom: 20px;
    transition: 0.8s ease-in-out;
  }
  &__total-price {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
    span {
      font-size: 28px;
      font-weight: 700;
      color: $pink-color;
    }
  }

  &__btn {
    text-align: center;
  }
}

.offers {
  // .offers__title
  &__title {
    font-size: 16px;
    font-weight: 600;
    color: $pink-color;
  }
}

.swiper {
  padding: 20px;
}
.swiper-slide {
  margin-right: 0;
}

::-webkit-scrollbar {
  width: 8px; /* ширина для вертикального скролла */
  height: 8px; /* высота для горизонтального скролла */
  background-color: $white-light-color;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: $grey-light-color;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: $grey-color;
}

// .cart-fade-enter-active {
//   transition: all 0.3s ease;
// }
// .cart-fade-leave-active {
//   transition: all 0.3s ease-in-out;
// }
// .cart-fade-enter,
// .cart-fade-leave-to {
//   transform: translateX(20px);
//   opacity: 0;
// }
.cart-fade-move,
.cart-fade-enter-active,
.cart-fade-leave-active {
  transition: all 0.3s ease-out;
}

/* 2. declare enter from and leave to state */
.cart-fade-enter-from,
.cart-fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}
// .cart-fade-leave-active {
//   position: absolute;
// }
</style>

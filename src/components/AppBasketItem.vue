<template>
  <article class="cart__item">
    <div class="cart__col">
      <div class="cart__img">
        <img :src="product.img" alt="" srcset="" />
      </div>
    </div>
    <div class="cart__col">
      <div class="cart__title">{{ product.title }}</div>
      <div class="cart__product-count">
        <button type="button" class="product-count__btn" @click="increase">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            class="icon__btn-count"
          >
            <rect fill="#454B54" y="4" width="10" height="2" rx="1"></rect>
          </svg>
        </button>
        <div class="product-count__count">1</div>
        <button type="button" class="product-count__btn" @click="decrease">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            class="icon__btn-count"
          >
            <g fill="#454B54">
              <rect x="4" width="2" height="10" ry="1"></rect>
              <rect y="4" width="10" height="2" rx="1"></rect>
            </g>
          </svg>
        </button>
      </div>
    </div>
    <div class="cart__col">
      <div class="cart__product-del">
        <button @click="deleteProduct(product)">
          <svg class="icon">
            <use href="@/assets/images/svg/trash-sprite.svg#trash"></use>
          </svg>
        </button>
      </div>
      <div class="cart__product-price">{{ product.price }} ₽</div>
    </div>
  </article>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
const props = defineProps({
  product: {
    type: Object,
  },
});

const deleteProduct = (product) => {
  store.dispatch("deleteProduct", product);
};
</script>

<style lang="scss" scoped>
.cart {
  // .cart__inner

  // .cart__list
  &__list {
    min-height: 200px;
    max-height: 400px;
    margin-bottom: 30px;
  }
  // .cart__item
  &__item {
    display: flex;
  }
  // .cart__col

  &__col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &:first-child {
      margin-right: 20px;
    }
    &:last-child {
      margin-left: auto;
      min-width: 100px;
      align-items: center;
    }
  }
  // .cart__img
  &__img {
    // max-width: 100px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  // .cart__title
  &__title {
    font-size: 16px;
    font-weight: bold;
  }
  // .cart__product-count
  &__product-count {
    width: 90px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: $white-light-color;
    border-radius: 10px;
    color: $grey-color;
  }

  // .cart__product-del
  &__product-del {
    button {
      width: 20px;
      height: 20px;
      background: none;
      border: none;
      cursor: pointer;
    }
  }
  // .cart__product-price
  &__product-price {
    font-size: 20px;
    font-weight: 700;
    color: $pink-color;
  }
}

.icon {
  width: 100%;
  height: 100%;
  margin: 0.5em;
}

.product-count {
  // .product-count__btn
  &__btn {
    font-size: 12px;
    padding: 6px;
    border: none;
    background: none;
    cursor: pointer;
  }
  // .product-count__count
  &__count {
    font-size: 18px;
    font-weight: 600;
  }
}
</style>

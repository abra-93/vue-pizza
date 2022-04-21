<template>
  <section
    id="paste"
    class="products"
    v-for="(value, index) in products"
    :key="index"
  >
    <h3 class="products-title section-title">{{ value.name }}</h3>
    <div class="products__wrap">
      <article
        class="product"
        v-for="(product, index) in value.products"
        :key="index"
        :data-id="product.id"
      >
        <div class="product__head">
          <div class="product__img">
            <img :src="product.img" :alt="product.title" />
          </div>
        </div>
        <div class="product__body">
          <div class="product__title">{{ product.title }}</div>
          <div class="product__subtitle">{{ product.subtitle }}</div>
        </div>
        <div class="product__footer">
          <div class="product__price">{{ product.price }} ₽</div>
          <MyBuyButton text="В Корзину" @click="handleClick(product)" />
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { useStore } from "vuex";
import MyBuyButton from "@/components/UI/MyBuyButton.vue";
const store = useStore();
const { products } = defineProps({
  products: Array,
});

const handleClick = (product) => {
  store.dispatch("addCart", product);
};
</script>

<style lang="scss" scoped>
.products-title {
  color: $pink-color;
}
.products {
  // .products__wrap
  &__wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
}
.products-title {
}
.product {
  flex: 1 1 230px;
  margin-right: 20px;
  margin-bottom: 60px;
  cursor: pointer;
  // .product__head
  &__head {
  }
  // .product__img
  &__img {
    width: 100%;
    overflow: hidden;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateY(3px);
    }

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
  // .product__body
  &__body {
    margin-bottom: 30px;
  }
  // .product__title
  &__title {
    font-size: 22px;
    font-weight: 900;
    margin-bottom: 20px;
  }
  // .product__subtitle
  &__subtitle {
    font-size: 12px;
    font-weight: 500;
    color: $grey-color;
  }
  // .product__footer
  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  // .product__price
  &__price {
    font-size: 22px;
    font-weight: 800;
  }
}
</style>

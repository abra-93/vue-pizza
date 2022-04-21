<template>
  <section class="new-products" v-if="novelties">
    <h3 class="new-products__title section-title">Новинки</h3>
    <div class="new-products__wrap">
      <AppNewProductItem
        v-for="product in novelties"
        :key="product.id"
        :product="product"
        :shadow="true"
      />
    </div>
  </section>
</template>

<script setup>
import { defineProps, reactive } from "vue";
import AppNewProductItem from "@/components/HomeView/AppNewProductItem.vue";
const props = defineProps({
  novelties: {
    type: Array,
  },
});
</script>

<style lang="scss" scoped>
.new-products {
  // .new-products__title
  &__title {
  }
  // .new-products__wrap
  &__wrap {
    display: flex;
    justify-content: space-between;
  }
}

// .product {
//   // .product__item
//   &__item {
//     width: 250px;
//     display: flex;
//     align-items: center;

//     padding: 10px;
//     border-radius: 10px;
//     box-shadow: 3px 0px 20px 5px #e0e0e0c7;
//   }
//   // .product__img
//   &__img {
//     margin-right: 30px;
//   }
//   // .product__content
//   &__content {
//   }
//   // .product__title
//   &__title {
//     font-size: 18px;
//     font-weight: bold;
//     margin-bottom: 10px;
//   }
//   // .product__price
//   &__price {
//     color: $pink-color;
//     font-weight: bold;
//   }
// }
</style>

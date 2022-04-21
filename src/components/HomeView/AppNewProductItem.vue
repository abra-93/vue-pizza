<template>
  <div class="product">
    <div
      :class="[{ 'b-shadow': shadow, 'el-border': border }, 'product__item']"
    >
      <div class="product__img">
        <img :src="product.img" :alt="product.name" />
      </div>
      <div class="product__content">
        <div class="product__title">{{ product.name }}</div>
        <div class="product__price">от {{ product.price }} ₽</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: Object,
  shadow: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.product {
  flex: 0 1 250px;
  // .product__item
  &__item {
    display: flex;
    align-items: center;
    padding: 10px;
    background: $white-color;
    border-radius: 10px;
    cursor: pointer;
  }
  // .product__img
  &__img {
    margin-right: 30px;
  }
  // .product__content
  &__content {
    width: 100%;
  }
  // .product__title
  &__title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  // .product__price
  &__price {
    color: $pink-color;
    font-weight: bold;
  }
}

.el-border {
  border: 1px solid $grey-light-color;
}
</style>

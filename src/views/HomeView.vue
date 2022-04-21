<template>
  <!-- <AppSlider /> -->
  <AppNewProducts :novelties="newProducts" />
  <AppProducts :products="data" />
</template>

<script setup>
import { ref } from "vue";

// import AppSlider from "@/components/HomeView/AppSlider.vue";
import AppNewProducts from "@/components/HomeView/AppNewProducts.vue";
import AppProducts from "@/components/HomeView/AppProducts.vue";

const newProducts = [
  {
    id: 1,
    name: "Карбонара",
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
const data = [
  {
    name: "Паста",
    products: [
      {
        id: 1,
        img: require("@/assets/images/products/image-1.png"),
        title: "С креветками и трюфелями",
        subtitle:
          "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350гр",
        price: 600,
      },
      {
        id: 2,
        img: require("@/assets/images/products/image-2.png"),
        title: "С креветками и трюфелями",
        subtitle:
          "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350гр",
        price: 600,
      },
      {
        id: 3,
        img: require("@/assets/images/products/image-3.png"),
        title: "С креветками и трюфелями",
        subtitle:
          "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350гр",
        price: 600,
      },
      {
        id: 4,
        img: require("@/assets/images/products/image-4.png"),
        title: "С креветками и трюфелями",
        subtitle:
          "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350гр",
        price: 600,
      },
      {
        id: 5,
        img: require("@/assets/images/products/image-1.png"),
        title: "С креветками и трюфелями",
        subtitle:
          "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350гр",
        price: 600,
      },
      {
        id: 6,
        img: require("@/assets/images/products/image-2.png"),
        title: "С креветками и трюфелями",
        subtitle:
          "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350гр",
        price: 600,
      },
      {
        id: 7,
        img: require("@/assets/images/products/image-3.png"),
        title: "С креветками и трюфелями",
        subtitle:
          "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350гр",
        price: 600,
      },
      {
        id: 8,
        img: require("@/assets/images/products/image-4.png"),
        title: "С креветками и трюфелями",
        subtitle:
          "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350гр",
        price: 600,
      },
    ],
  },
  {
    name: "Супы",
    products: [
      {
        img: require("@/assets/images/products/image-1.png"),
        title: "С креветками и трюфелями",
        subtitle:
          "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350гр",
        price: 600,
      },
      {
        img: require("@/assets/images/products/image-2.png"),
        title: "С креветками и трюфелями",
        subtitle:
          "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350гр",
        price: 600,
      },
      {
        img: require("@/assets/images/products/image-3.png"),
        title: "С креветками и трюфелями",
        subtitle:
          "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350гр",
        price: 600,
      },
      {
        img: require("@/assets/images/products/image-4.png"),
        title: "С креветками и трюфелями",
        subtitle:
          "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350гр",
        price: 600,
      },
      {
        img: require("@/assets/images/products/image-1.png"),
        title: "С креветками и трюфелями",
        subtitle:
          "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350гр",
        price: 600,
      },
      {
        img: require("@/assets/images/products/image-2.png"),
        title: "С креветками и трюфелями",
        subtitle:
          "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350гр",
        price: 600,
      },
      {
        img: require("@/assets/images/products/image-3.png"),
        title: "С креветками и трюфелями",
        subtitle:
          "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350гр",
        price: 600,
      },
      {
        img: require("@/assets/images/products/image-4.png"),
        title: "С креветками и трюфелями",
        subtitle:
          "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350гр",
        price: 600,
      },
    ],
  },
];
</script>

<style lang="scss" scoped>
.swiper-wrapper {
}
.slide {
  // .slide__img
  &__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>

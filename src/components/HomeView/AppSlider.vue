<template>
  <section class="carusel">
    <swiper
      class="slider"
      :loop="true"
      :space-between="10"
      slides-per-view="auto"
      :centered-slides="true"
    >
      <swiper-slide
        class="slide"
        v-for="(slide, index) in slidesImg"
        :key="index"
      >
        <img class="slide__img" :src="slide" alt="" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
const slidesImg = [
  require("@/assets/images/slider/image-5.png"),
  require("@/assets/images/slider/image-6.png"),
  require("@/assets/images/slider/image-7.png"),
];
</script>

<style lang="scss" scoped>
.slider {
  height: 380px;
}
.swiper-slide {
  width: 900px;
}
.slide {
  // .slide__img
  &__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.swiper-slide-prev {
  transform: translateX(80px);
}
</style>

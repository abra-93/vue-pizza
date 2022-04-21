<template>
  <swiper
    class="swiper"
    :modules="modules"
    :space-between="10"
    :centered-slides="true"
    :loop="true"
  >
    <swiper-slide class="slide" v-for="(image, index) in slider" :key="index"
      ><img :src="image.path" alt="" srcset=""
    /></swiper-slide>
  </swiper>
</template>

<script setup>
import { defineProps } from "vue";
import { Swiper, SwiperSlide, modules } from "swiper/vue";
 Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const { slider } = defineProps(["slider"]);
</script>

<style lang="scss">
.swiper {
}
.swiper-slide-prev {
  transform: translateX(260px) scale(0.8) !important;
  transition: 0.4s;
  opacity: 0.6;
}
.swiper-slide-active {
  transform: scale(1) !important;
  transition: 0.4s;
}
.swiper-slide-next {
  transform: translateX(-260px) scale(0.8) !important;
  transition: 0.4s;
  opacity: 0.6;
}

.slide {
  border-radius: 20px;
  overflow: hidden;
  img {
    width: 100%;
    height: 380px;
    object-fit: contain;
  }
}
</style>

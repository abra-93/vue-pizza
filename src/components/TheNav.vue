<template>
  <nav class="menu">
    <div class="menu__wrap">
      <ul class="nav__list">
        <router-link to="/">
          <div :class="[isLogo ? 'active' : 'nav__logo']">
            <img :src="require('@/assets/images/Logo.png')" alt="" srcset="" />
          </div>
        </router-link>
        <li class="nav__item" v-for="(link, index) in routes" :key="index">
          <a class="nav__link" :href="link.path">{{ link.name }}</a>
        </li>
      </ul>

      <div class="menu__right-block">
        <div class="menu__login">Войти</div>
        <div class="menu__basket">
          <button class="basket__btn" @click="isBasket = !isBasket">
            Корзина<span class="basket__line"></span>
            <span class="basket__count">{{ store.state.cart.length }}</span>
          </button>
        </div>
      </div>
      <transition name="basket-fade">
        <AppBasket v-if="isBasket" ref="basket" :cartList="store.state.cart" />
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, reactive } from "vue";
import { useStore } from "vuex";
import { onClickOutside } from "@vueuse/core";
import AppBasket from "@/components/AppBasket.vue";
const store = useStore();
const isBasket = ref(false);
const basket = ref(null);
const isLogo = ref(false);
const routes = ref([
  { name: "Пицца", path: "#pizza" },
  { name: "Супы", path: "#soups" },
  { name: "Салаты", path: "#salads" },
  { name: "Антипасти", path: "#antipasti" },
  { name: "Напитки", path: "#drinks" },
  // { name: "Десерты", path: "#desserts" },
  // { name: "Бакалея", path: "#grocery" },
  // { name: "Акции", path: "#stocks" },
  // { name: "Комбо", path: "#combo" },
  { name: "Контакты", path: "#contacts" },
]);

//  добавлкние логотипа при прокрутке страницы
const pageScroll = () => {
  if (window.scrollY > 86) {
    isLogo.value = true;
  } else {
    isLogo.value = false;
  }
};

window.addEventListener("scroll", pageScroll);

//  При клике вне корзины скрываем ее
const closeBasket = (e) => {
  if (!e.target.classList.contains("basket__btn")) {
    return (isBasket.value = !isBasket.value);
  }
};

onClickOutside(basket, closeBasket);

// const cartList = computed(() => {
//   return store.getters["getCart"];
// });
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  position: sticky;
  top: 0;
  background: $bg-view;
  z-index: 999;
  &:before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  // .menu__wrap
  &__wrap {
    padding: 10px 0;
    display: flex;
    align-items: center;
    position: relative;
  }

  // .menu__right-block
  &__right-block {
    display: flex;
    align-items: center;
  }
  // .menu__login
  &__login {
    font-size: 16px;
    font-weight: 600;
    color: $grey-color;
    cursor: pointer;
  }
  // .menu__basket
  &__basket {
    margin-left: 20px;
    position: relative;
    cursor: pointer;
  }

  &__mobile {
    width: 100%;
    display: none;
  }
}
.nav {
  // .nav__logo
  &__logo {
    display: inline-block;
    width: 0px;
    margin-right: 0px;
    transition: 0.3s ease-in-out;
    img {
      width: 100%;
    }
  }
  // .nav__list
  &__list {
    display: flex;
    align-items: center;
    margin-right: auto;
  }
  // .nav__item
  &__item {
    margin-right: 15px;
  }
  // .nav__link
  &__link {
    font-size: 16px;
    font-weight: 600;
  }
}
.basket {
  // .basket__btn
  &__btn {
    display: flex;
    align-items: center;
    padding: 10px 30px;
    background: $pink-color;
    color: $white-color;
    border: 0.5px solid #fff;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
  // .basket__line
  &__line {
    width: 3px;
    height: 22px;
    display: inline-block;
    background: #fff;
    margin: 0 10px;
    border-radius: 10px;
  }
  // .basket__count
  &__count {
  }
}

.mobile__btn {
  width: 50px;
  height: 40px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  position: relative;

  cursor: pointer;
  span {
    display: block;
    width: 100%;
    height: 3px;
    background: $black-color;
    &::after {
      content: "";
      width: 100%;
      height: 3px;
      position: absolute;
      top: 8px;
      left: 0;
      background: $black-color;
    }
    &::before {
      content: "";
      width: 100%;
      height: 3px;
      position: absolute;
      bottom: 8px;
      left: 0;
      background: $black-color;
    }
  }
}

.active {
  width: 30px;
  margin-right: 20px;
  transition: 0.3s ease-in;
  img {
    width: 100%;
  }
}

// Animation basket
.basket-fade-enter-active {
  transition: all 0.3s ease-out;
}

.basket-fade-leave-active {
  transition: all 0.3s ease-out;
}

.basket-fade-enter-from,
.basket-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>

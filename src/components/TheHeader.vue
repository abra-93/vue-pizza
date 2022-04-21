<template>
  <header>
    <div class="header__wrap">
      <router-link to="/">
        <div class="header__logo">
          <div class="logo__image">
            <img :src="require('@/assets/images/Logo.png')" alt="logo" />
          </div>
          <div class="logo__name">
            <div class="logo__title">YA BAO</div>
            <div class="logo__subtitle">Дух китайской еды</div>
          </div>
        </div>
      </router-link>
      <div class="header__delivery">
        <div class="delivery__city">Доставка пасты <span>Москва</span></div>
        <div class="delivery__time">
          Время доставки<span class="delivery__time--dot"></span>
          <span>от 31 мин</span>
        </div>
      </div>
      <div class="header__feadback-btn">
        <button class="feadback__btn">Заказать звонок</button>
      </div>
      <div class="header__phone">
        <a href="tel:+8 800 333-36-62"><p>8 800 333-36-62</p></a>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style scoped lang="scss">
.header {
  // .header__wrap
  &__wrap {
    padding: 10px 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    @include _768 {
      justify-content: space-between;
    }
    @include _380 {
      flex-direction: column;
      gap: 20px;
    }
  }
  // .header__top
  &__top {
    height: 30px;
    display: flex;
    align-items: center;
  }
  // .header__logo
  &__logo {
    display: flex;
    margin-right: 80px;
    @include _768 {
      margin-right: 0;
    }
  }
  // .header__delivery
  &__delivery {
    margin-right: auto;
    @include _768 {
      display: none;
    }
  }
  // .header__feadback-btn
  &__feadback-btn {
  }
  // .header__phone
  &__phone {
    margin-left: 30px;
    color: $orange-color;
    font-size: 26px;
    font-weight: bold;
    @include _1040 {
      display: none;
    }
  }
}
.logo {
  // .logo__image
  &__image {
    margin-right: 14px;
    @include _600 {
      width: 48px;
      height: 48px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  // .logo__name
  &__name {
    margin: auto;
  }
  // .logo__title
  &__title {
    font-family: $Logo;
    font-weight: 500;
    font-size: 38px;
    @include _480 {
      font-size: 28px;
    }
  }
  // .logo__subtitle
  &__subtitle {
    font-family: $montserrat;
    font-weight: 400;
    font-size: 12px;
    @include _480 {
      font-size: 8px;
    }
  }
}
.delivery {
  // .delivery__city
  &__city {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 8px;
    span {
      color: $orange-color;
    }
  }
  // .delivery__time
  &__time {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 600;

    &--dot {
      display: inline-block;
      width: 5px;
      height: 5px;
      margin: 0 5px;
      border-radius: 5px;
      background: $orange-color;
    }
  }
}

.feadback {
  &__btn {
    padding: 10px 20px;
    background: $orange-color;
    border: none;
    border-radius: 10px;
    color: $white-color;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;

    @include _380 {
      font-weight: 400;
      letter-spacing: 1px;
    }
  }
}
</style>

<template>
  <button class="button__buy">
    {{ text }}
  </button>
</template>

<script setup>
const { title } = defineProps({
  text: {
    type: String,
    default: "Заказать",
  },
});
</script>

<style lang="scss" scoped>
.button {
  &__buy {
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    color: $white-color;
    background: $pink-color;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    outline: none;
    border: none;
    &:hover {
      transform: translateY(3px);
    }
  }
}
</style>

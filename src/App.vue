<template>
  <div class="container">
    <the-header />
    <the-nav />
    <main>
      <router-view />
    </main>
  </div>
</template>
<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheNav from "@/components/TheNav.vue";
</script>
<style lang="scss"></style>

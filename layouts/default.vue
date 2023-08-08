<script setup lang="ts">
import { useCartStore } from "@/stores/cartStore";

const cartStore = useCartStore();

cartStore.getCart();
</script>

<template>
  <div class="m-8">
    <common-app-bar></common-app-bar>
    <div class="wrapper">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>

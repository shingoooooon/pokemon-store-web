<script setup lang="ts">
import { useCartStore } from "@/stores/cartStore";

const cartStore = useCartStore();
</script>

<template>
  <header class="wrapper flex justify-between">
    <NuxtLink to="/">
      <h1 class="text-secondary text-5xl">Pokemon Store</h1>
    </NuxtLink>
    <NuxtLink to="/cart">
      <span class="material-icons-outlined text-secondary text-5xl">
        shopping_bag
      </span>
      <span class="bg-white py-1 px-2 rounded-2xl font-bold badge">
        {{ cartStore.itemsTotal }}
      </span>
    </NuxtLink>
  </header>
</template>

<style scoped>
.badge {
  position: relative;
  left: -15px;
}
</style>

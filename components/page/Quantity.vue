<script setup lang="ts">
import type { IPokemonEntity } from "@/domain/pokemon/entity";
import { useCartStore } from "@/stores/cartStore";

const cartStore = useCartStore();

const props = defineProps<{ pokemon: IPokemonEntity }>();
const { pokemon } = toRefs(props);

const handleIncQuantity = (id: number) => {
  cartStore.incQuantity(id);
};

const handleDecQuantity = (id: number) => {
  cartStore.decQuantity(id);
};
</script>

<template>
  <div class="flex">
    <button class="btn" @click="handleDecQuantity(pokemon.id)">-</button>
    <p class="py-1 px-4 mx-1 rounded-sm text-lg bg-gray-200">
      {{ pokemon.quantity }}
    </p>
    <button class="btn" @click="handleIncQuantity(pokemon.id)">+</button>
  </div>
</template>

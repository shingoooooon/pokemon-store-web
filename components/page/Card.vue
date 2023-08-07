<script setup lang="ts">
import type { IPokemonEntity } from "../../domain/pokemon/entity";

const props = defineProps<{ pokemon: IPokemonEntity }>();
const { pokemon } = toRefs(props);
</script>

<template>
  <div class="card flex items-center gap-8">
    <img
      class="border-2 border-amber-300 rounded"
      :src="pokemon.img"
      :alt="pokemon.name"
      :height="200"
      :width="200"
    />
    <div>
      <p class="text-2xl text-secondary">{{ pokemon.name }}</p>
      <p class="text-xl text-gray-50">{{ pokemon.description }}</p>
      <p class="text-lg text-secondary my-3">{{ pokemon.price }} coins</p>
      <button class="btn">
        <span>Add to Cart</span>
      </button>
    </div>
  </div>
</template>

<style scoped></style>

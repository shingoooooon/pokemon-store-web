<script setup lang="ts">
import type { IPokemonEntity } from "@/domain/pokemon/entity";
import { useCartStore } from "@/stores/cartStore";

const cartStore = useCartStore();
const isLoading = ref<boolean>(false);

const props = defineProps<{ pokemon: IPokemonEntity }>();
const { pokemon } = toRefs(props);
const type1Path = computed(() => `/img/types/${pokemon.value.type1}.png`);
const type2Path = computed(() => `/img/types/${pokemon.value.type2}.png`);

const handelAddToCart = async (pokemon: IPokemonEntity): Promise<void> => {
  isLoading.value = true;
  await cartStore.addToCart(pokemon);
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
};
</script>

<template>
  <div class="card flex items-center gap-8">
    <img
      class="img"
      :src="pokemon.img"
      :alt="pokemon.name"
      :height="200"
      :width="200"
    />
    <div>
      <div class="flex gap-3">
        <p class="text-2xl text-secondary">{{ pokemon.name }}</p>
        <img
          v-show="pokemon.type1"
          :src="type1Path"
          :alt="pokemon.type1"
          :height="30"
          :width="30"
        />
        <img
          v-show="pokemon.type2"
          :src="type2Path"
          :alt="pokemon.type2"
          :height="30"
          :width="30"
        />
      </div>
      <p class="text-xl text-gray-50">{{ pokemon.description }}</p>
      <p class="text-lg text-secondary my-3">{{ pokemon.price }} coins</p>
      <button
        class="btn"
        @click="handelAddToCart(pokemon)"
        :disabled="isLoading"
      >
        <span v-show="!isLoading">Add to Cart</span>
        <span v-show="isLoading">Adding...</span>
      </button>
    </div>
  </div>
</template>

<style scoped></style>

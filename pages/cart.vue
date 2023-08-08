<script setup lang="ts">
import { ref } from "vue";
import { useCartStore } from "@/stores/cartStore";
import type { ICartPokemonEntity } from "@/domain/cart/entity";

const cartStore = useCartStore();

const deleteItem = (id: number) => {
  cartStore.deleteFromCart(id);
};
</script>

<template>
  <div>
    <div v-if="cartStore.cart.length" class="card text-xl">
      <div
        v-for="pokemon in cartStore.cart"
        :key="pokemon.id"
        class="flex gap-8 items-center"
      >
        <img
          class="img"
          :src="pokemon.img"
          :alt="pokemon.name"
          :height="200"
          :width="200"
        />
        <p class="text-white">{{ pokemon.name }}</p>
        <page-quantity :pokemon="pokemon"></page-quantity>
        <p class="text-white">{{ pokemon.price * pokemon.quantity }} coins</p>
        <button class="ml-auto" @click="deleteItem(pokemon.id)">
          <span class="material-icons-outlined text-white">
            delete_outline
          </span>
        </button>
      </div>
      <div class="text-right pt-4 mt-4 border-t-2">
        <span class="text-white">Total amount to pay: </span>
        <span class="text-secondary">{{ cartStore.priceTotal }}</span>
      </div>
    </div>
    <div v-else>
      <p class="text-white">No pokemon</p>
    </div>
  </div>
</template>

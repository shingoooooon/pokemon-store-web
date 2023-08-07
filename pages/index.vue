<script setup lang="ts">
const { data: pokemons } = await useFetch("http://localhost:4000/pokemons");
</script>

<template>
  <div>
    <h2 class="text-white text-2xl text-center my-8">All Pokemons</h2>

    <div class="grid grid-cols-2 gap-7">
      <div v-for="pokemon in pokemons">
        <page-card :pokemon="pokemon"></page-card>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

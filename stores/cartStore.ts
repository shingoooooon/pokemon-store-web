import { defineStore } from "pinia";
import type { ICartPokemonEntity } from "@/domain/cart/entity";
import type { IPokemonEntity } from "@/domain/pokemon/entity";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [] as ICartPokemonEntity[],
  }),
  getters: {
    priceTotal(): number {
      return this.cart.reduce((total: number, item: ICartPokemonEntity) => {
        return total + item.price * item.quantity;
      }, 0);
    },
    itemsTotal(): number {
      return this.cart.reduce((total: number, item: ICartPokemonEntity) => {
        return total + item.quantity;
      }, 0);
    },
  },
  actions: {
    async getCart(): Promise<any> {
      const data = await $fetch("http://localhost:4000/cart");
      this.cart = data;
    },
    async deleteFromCart(id: number): Promise<void> {
      this.cart = this.cart.filter((item) => item.id !== id);
      await $fetch(`http://localhost:4000/cart/${id}`, {
        method: "DELETE",
      });
    },
    async incQuantity(id: number): Promise<void> {
      let updatedPokemon;
      this.cart = this.cart.map((item: ICartPokemonEntity) => {
        if (item.id === id) {
          item.quantity++;
          updatedPokemon = item;
        }
        return item;
      });

      console.log(updatedPokemon);

      await $fetch(`http://localhost:4000/cart/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedPokemon),
      });
    },
    async decQuantity(id: number): Promise<void> {
      let updatedPokemon;
      this.cart = this.cart.map((item: ICartPokemonEntity) => {
        if (item.id === id && item.quantity > 1) {
          item.quantity--;
          updatedPokemon = item;
        }
        return item;
      });

      if (updatedPokemon) {
        await $fetch(`http://localhost:4000/cart/${id}`, {
          method: "PUT",
          body: JSON.stringify(updatedPokemon),
        });
      }
    },
    async addToCart(pokemon: IPokemonEntity): Promise<void> {
      const exists = this.cart.find((item) => item.id === pokemon.id);

      if (exists) {
        this.incQuantity(exists.id);
      } else {
        const newPokemon = { ...pokemon, quantity: 1 };
        this.cart.push(newPokemon);

        await $fetch(`http://localhost:4000/cart`, {
          method: "POST",
          body: JSON.stringify(newPokemon),
        });
      }
    },
  },
});

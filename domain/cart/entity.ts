import { IPokemonEntity } from "@/domain/pokemon/entity";

export interface ICartPokemonEntity extends IPokemonEntity {
  quantity: number;
}

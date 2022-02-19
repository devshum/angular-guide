import { Ingredient } from "./ingredient.interface";

export interface Recipe {
  name: string;
  description: string;
  imageUrl: string;
  ingredients: Ingredient[];
}
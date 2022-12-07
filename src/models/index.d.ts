import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerPantry = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pantry, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly FoodItems?: (FoodItem | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPantry = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pantry, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly FoodItems: AsyncCollection<FoodItem>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Pantry = LazyLoading extends LazyLoadingDisabled ? EagerPantry : LazyPantry

export declare const Pantry: (new (init: ModelInit<Pantry>) => Pantry) & {
  copyOf(source: Pantry, mutator: (draft: MutableModel<Pantry>) => MutableModel<Pantry> | void): Pantry;
}

type EagerFoodItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FoodItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly amount?: number | null;
  readonly added?: string | null;
  readonly expires?: string | null;
  readonly pantryID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFoodItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FoodItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly amount?: number | null;
  readonly added?: string | null;
  readonly expires?: string | null;
  readonly pantryID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FoodItem = LazyLoading extends LazyLoadingDisabled ? EagerFoodItem : LazyFoodItem

export declare const FoodItem: (new (init: ModelInit<FoodItem>) => FoodItem) & {
  copyOf(source: FoodItem, mutator: (draft: MutableModel<FoodItem>) => MutableModel<FoodItem> | void): FoodItem;
}
// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Pantry, FoodItem } = initSchema(schema);

export {
  Pantry,
  FoodItem
};
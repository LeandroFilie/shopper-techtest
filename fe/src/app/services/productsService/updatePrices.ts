import { httpClient } from '../httpClient';
import { ValidateDataResponse } from './validateFile';

export async function updatePrices(products: ValidateDataResponse) {
  const { data } = await httpClient.put('/updatePrices', products);
  return data;
}

import { Product } from '../../types/Product';
import { httpClient } from '../httpClient';

export interface ValidateDataResponse{
  products: Product[];
}

export async function validateFile(file: File) {
  const bodyFormData = new FormData();
  bodyFormData.append('file', file);

  const { data } = await httpClient.post<ValidateDataResponse>('/validate', bodyFormData);

  return data;
}

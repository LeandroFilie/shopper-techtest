import { httpClient } from '../httpClient';

interface Product{
  product_code: number;
  new_price: number;
  message: string[];
}

export interface ValidateDataResponse{
  products: Product[];
}

export async function validateFile(file: File) {
  const bodyFormData = new FormData();
  bodyFormData.append('file', file);

  const { data } = await httpClient.post<ValidateDataResponse>('/validate', bodyFormData);

  return data;
}

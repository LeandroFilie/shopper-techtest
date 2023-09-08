import { ProductRules } from './ProductRules';

export interface Product{
  product_code: number;
  name: string;
  sales_price: number;
  new_price: number;
  rules: ProductRules;
}

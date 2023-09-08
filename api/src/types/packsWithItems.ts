export interface PacksWithItems {
  pack_id: number;
  items: Array<{
    id: number;
    product_id: number;
    qty: number;
  }>
}

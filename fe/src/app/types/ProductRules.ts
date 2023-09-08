export interface ProductRules {
  missingInput: boolean;
  priceIsNaN: boolean;
  priceSmallerThanCost: boolean;
  priceChangeGreaterThan10Percent: boolean;
  notExistsProduct: boolean;
  packComponentNotPresent: boolean;
  packPriceNotEqualToSumOfComponents: boolean;
}

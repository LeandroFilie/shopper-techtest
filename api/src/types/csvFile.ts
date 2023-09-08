export interface CSVFile {
  product_code: number;
  new_price: number;
  message?: string[];
}

export interface CSVFileResponse extends CSVFile {
  name?: string;
  sales_price?: string;
}

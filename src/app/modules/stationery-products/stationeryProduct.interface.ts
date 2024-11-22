type Category =
  | 'Writing'
  | 'Office Supplies'
  | 'Art Supplies'
  | 'Educational'
  | 'Technology';

interface IStationeryProduct {
  name: string;
  brand: string;
  price: number;
  category: Category;
  description: string;
  quantity: number;
  inStock: boolean;
}

export default IStationeryProduct;
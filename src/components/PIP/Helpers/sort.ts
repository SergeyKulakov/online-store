import { ProductControllersTypes } from '@assos/datasources/magento/Products';
import {SortOptions} from '../Context/ProductProvider';


export const sortProducts = (text: SortOptions, products: ProductControllersTypes.Product[]) => {
  switch (text) {
    case 'Product Name ASC':
      return products.sort((a, b) => a.name.localeCompare(b.name));
    case 'Product Name DESC':
      return products.sort((a, b) => b.name.localeCompare(a.name));
    case 'Price ASC':
      return products.sort((a, b) => a.pricing.min_price - b.pricing.min_price);
    case 'Price DESC':
      return products.sort((a, b) => b.pricing.min_price - a.pricing.min_price);
    default:
      return products;
  }
};

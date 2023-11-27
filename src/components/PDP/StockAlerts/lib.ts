import { ProductControllersTypes } from '@assos/datasources/magento/Products';
import { env } from '@brandingbrand/fsapp';

export const getImage = (product: ProductControllersTypes.Product) => {
  const ext = product.assets.placeholders.small_image;
  return env.magento.mediaBaseURL + ext;
};

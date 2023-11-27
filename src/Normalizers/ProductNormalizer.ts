import {ProductControllersTypes} from '@assos/datasources/magento/Products';
import {magento} from '@assos/datasources';


const extractColorSwatches =
(variants: ProductControllersTypes.Product[]) => {
  return variants.map(variant => {
    const {id, assets, childs} = variant;
    return { ...variant.attributes.color_details, id, assets, childs};
  });
};

export const normalizeProduct = async (product: ProductControllersTypes.Product) => {
  // Includes product options e.g size.
  const variants = await magento.fetchProductVariants({
    where: {
      name: product.name,
      visible: '1' // Get unique variants.
    }
  });
  const colorSwatches = extractColorSwatches(variants);
  return {
    ...product,
    colorSwatches
  };
};

export const normalizeProducts = async (products: ProductControllersTypes.Product[]) => {
  const names = products.reduce<string[]>((acc, prod) => {
    const {name} = prod;
    if (!acc.includes(name)) {
      acc.push(name);
    }
    return acc;
  }, []);
  const variants = await magento.fetchAllVariants(names);
  const normalized = products.map(product => {
    const ownVariants = variants.filter(variant => variant.name === product.name);
    const colorSwatches = extractColorSwatches(ownVariants);
    return {...product, colorSwatches};
  });
  return normalized;
};

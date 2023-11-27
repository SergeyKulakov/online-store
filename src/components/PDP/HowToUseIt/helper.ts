import { magento } from '@assos/datasources';

export const buildWhenHowToUseIt = async (productSKU: string) => {
  const result: string[] = [];
  const cmsBlocks = await magento.fetchWhenHowToUse(productSKU);
  const filteredBlock = cmsBlocks.filter(
    block =>
      block.content.includes('WHEN/HOW TO USE IT') ||
      block.content.includes('QUANDO/COME USARE QUESTO PRODOTTO') ||
      block.content.includes('CUÁNDO Y CÓMO UTILIZAR EL PRODUCTO') ||
      block.content.includes("INSTRUCTIONS D'UTILISATION") ||
      block.content.includes('WANN/WIE ES EINGESETZT WIRD')
  );

  const filteredBlockContentArray = filteredBlock[0].content.match(
    /data-selected-sku\s*=\s*['"]([^'"]+)]*/g
  );

  if (filteredBlockContentArray) {
    filteredBlockContentArray.find(list => {
      const skuListString = list.replace('data-selected-sku="', '');
      const productArray = skuListString
        .split(',')
        .filter(val => val !== productSKU);
      result.push(...productArray);
      return productArray.length > 1;
    });

    return result;
  } else {
    return false;
  }
};

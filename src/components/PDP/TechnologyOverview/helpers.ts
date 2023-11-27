import { ProductControllersTypes } from '@assos/datasources/magento/Products';
import { TechnologyOverview } from './types';

const stripHTMLRegex = /(<([^>]+)>)/ig;
const convertHTML = (value: string) => {
  if (value.indexOf('<') < 0) {
    return value;
  }
  return value.replace('<br>', '\n').replace(stripHTMLRegex, '');
};

// tslint:disable-next-line: cyclomatic-complexity
export const createTechnologyOverviewArray = (
  product: ProductControllersTypes.Product
) => {
  const technologyOverviewArray: TechnologyOverview[] = [];

  if (product.attributes.technology.value) {
    technologyOverviewArray.push(product.attributes.technology);
  }

  if (product.attributes.technology2.value) {
    technologyOverviewArray.push(product.attributes.technology2);
  }

  if (product.attributes.technology3.value) {
    technologyOverviewArray.push(product.attributes.technology3);
  }

  if (product.attributes.technology4.value) {
    technologyOverviewArray.push(product.attributes.technology4);
  }

  if (product.attributes.technology5.value) {
    technologyOverviewArray.push(product.attributes.technology5);
  }

  if (product.attributes.technology6.value) {
    technologyOverviewArray.push(product.attributes.technology6);
  }

  if (product.attributes.technology7.value) {
    technologyOverviewArray.push(product.attributes.technology7);
  }

  if (product.attributes.technology8.value) {
    technologyOverviewArray.push(product.attributes.technology8);
  }

  if (product.attributes.technology9.value) {
    technologyOverviewArray.push(product.attributes.technology9);
  }

  if (product.attributes.technology9.value) {
    technologyOverviewArray.push(product.attributes.technology9);
  }

  if (product.attributes.technology10.value) {
    technologyOverviewArray.push(product.attributes.technology10);
  }
  const convertedTechOverviewArray = technologyOverviewArray.map(tech => ({
    title: tech.title,
    value: convertHTML(tech.value)
  }));
  return convertedTechOverviewArray;
};

import {magento} from '@assos/datasources';
import { PopularSearchItem } from './types';

export const popularSearch = [
  'Men Bib Shorts',
  'Women Bib Shorts',
  'Men Wind Rain Sheels',
  'GT Gloves C2',
  'Women Wind Rain Sheels',
  'Women Jackets'
];


export const getPopularSearchTerms = async (): Promise<PopularSearchItem[] | undefined> => {

  const data = await magento.fetchPopularSearch({
    where: {
      idx: 'search-shortcuts'
    }
  });

  return (data?.[0]?.content as string)
    ?.match(new RegExp(/(href=[\s\S]+?&lt)/gm))
    ?.map(it => ({
      root: it.substring(it.indexOf('href="') + 6, it.indexOf('"&gt')),
      title: it.substring(it.indexOf('"&gt;') + 5, it.indexOf('&lt'))
    }));
};

import { ProductControllersTypes } from '@assos/datasources/magento/Products';
import { Constructor } from '@assos/datasources/magento/Base';

export const CMSController = <TBase extends Constructor>(Base: TBase) => {
  return class CMSController extends Base {
    fetchPopularSearch = async (
      query: ProductControllersTypes.Query
    ): Promise<any> => {
      const headers = await this.magentoHeaders();

      const res = await this.get(
        `/V1/cms/blocks?filter=${JSON.stringify(query)}`,
        {
          headers
        }
      );

      if (res.status === 200) {
        return res.data;
      }

      throw Error(res.data);
    }

    fetchWhenHowToUse = async (productSKU: string) => {
      const res = await this.get(
        `/V1/cms/blocks?filter={
          "where": {
                "display_selection_target": "${productSKU}"
          }
        }`,
        { headers: await this.magentoHeaders() }
      );

      return res.data as { id: string; title: string; content: string }[];
    }

    fetchStaticSizeChart = async (sizeGuideId: string) => {
      const res = await this.get(
        `/V1/cms/blocks?filter={
          "where": {
            "idx": "${sizeGuideId}"
          }
        }`,
        { headers: await this.magentoHeaders() }
      );
      return res.data as {
        id: string;
        idx: string;
        status: boolean;
        title: string;
        content: string;
      }[];
    }
  };
};

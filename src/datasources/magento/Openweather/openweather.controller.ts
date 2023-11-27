import { Constructor } from '@assos/datasources/magento/Base';
import { getStylePreferences } from '@assos/lib';
import { normalizeProducts } from '@assos/Normalizers/ProductNormalizer';
import { StylePreferences } from '@assos/types/stylePreferences';
import { ProductControllersTypes } from '../Products';

interface ResponseProducts {
  kit: string;
  products: ProductControllersTypes.Product[];
}

// tslint:disable-next-line:cyclomatic-complexity
const setHeaderPreferences = (preferences: StylePreferences) => {
  return {
    gender: preferences.mens && !preferences.womens ? 'MAN' :
      !preferences.mens && preferences.womens ? 'WOMAN' : '',
    ride: preferences.road && !preferences.mountain && !preferences.gravel ? 'ROAD' :
      !preferences.road && preferences.mountain && !preferences.gravel ? 'MTB' :
      !preferences.road && !preferences.mountain && preferences.gravel ? 'GRAVEL' : '',
    fit: preferences.racing && !preferences.comfort ? 'RACING' :
      !preferences.racing && preferences.comfort ? 'COMFORT' : ''
  };
};

export const OpenWeatherController = <TBase extends Constructor>(
  Base: TBase
) => {
  return class OpenWeatherController extends Base {
    fetchWeatherProductRecs = async (coords: string) => {
      const lat = coords.split(',')[0];
      const long = coords.split(',')[1];
      const stylePreferences = await getStylePreferences();

      const {gender, ride, fit} = setHeaderPreferences(stylePreferences);
      const authHeaders = await this.magentoHeaders();

      const requestHeaders = {
        ...authHeaders,
        lat,
        long,
        gender,
        ride,
        fit
      };

      const response = await this.get('/V1/catalog/products/weather', {
        headers: requestHeaders
      });


      const weatherConditions = response.data.openweather_data.current;
      const productKits: ResponseProducts[] = response.data.items.filter(
        (value: any) => value !== null
      );

      const isIndoorRideRecommended = productKits.length === 1 &&
       !!productKits.find(p => p.kit.includes('indoor'));
      const normalizedProducts = await Promise.all(
        productKits.map(async ({kit, products}) => {
          return {
            kit,
            products: await normalizeProducts(products)
          };
        })
      );

      return {
        weatherConditions,
        isIndoorRideRecommended,
        products: normalizedProducts
      };
    }
  };
};

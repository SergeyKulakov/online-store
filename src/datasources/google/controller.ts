import FSNetwork, { FSNetworkRequestConfig } from '@brandingbrand/fsnetwork';
// TODO move api key
const key = 'AIzaSyDsI9Sm6cU36CR96_6xlGVVzT0kRCHFIqo';
export class GooglePlacesController extends FSNetwork {
  constructor(config: FSNetworkRequestConfig) {
    super(config);
  }
  suggestPlaces = async (query: string) => {
    const baseURL = 'https://maps.googleapis.com/maps/api/place/';

    const response = await this.get(
      `${baseURL}autocomplete/json?input=${query}&key=${key}`
    );
    // returns an array of locations matching given query
    const predictions = response.data.predictions;

    return predictions as {
      description: string;
      place_id: string;
      reference: string;
    }[];
  }
  placeDetails = async (placeId: string) => {
    const baseURL = 'https://maps.googleapis.com/maps/api/place/details';

    const response = await this.get(
      `${baseURL}/json?place_id=${placeId}&key=${key}`
    );
    // returns an an object of location details for given place
    const coordinates = response.data.result.geometry.location as {
      lat: number;
      lng: number;
    };

    return `${coordinates.lat},${coordinates.lng}`;
  }
  reverseGeolocate = async (coords: string) => {
    const baseURL = 'https://maps.googleapis.com/maps/api/geocode';
    // returns first results from array of potential locations
    const response = await this.get(
      `${baseURL}/json?latlng=${coords}&key=${key}`
    );
    // TODO filter for type "locality, polititical" and return the first result

    const addressComponents = response.data.results[1].address_components;

    const locality = addressComponents.filter(
      (places: { types: string | string[] }) => {
        return places.types.includes('locality') || places.types.includes('country');
      }
    );

    const state = addressComponents.filter(
      (places: { types: string | string[] }) => {
        return places.types.includes('administrative_area_level_1');
      }
    );

    return `${locality[0].long_name} ${!!state.length ? state[0].short_name : ''}`;
  }
}

export const google = new GooglePlacesController({});

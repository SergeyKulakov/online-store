import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { google } from '@assos/datasources/google/controller';
import { i18n, keys } from '@assos/lib';
import { assetsImages, font, icons } from '@assos/styles';
import { SearchGhost } from '@assos/components/SearchGhost';
import { magento } from '@assos/datasources';
import { RecommendationsCarousel } from './RecommendationsCarousel';
import ChangeLocation from './ChangeLocation';
import {getCountry} from 'react-native-localize';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';
import { Navigation } from 'react-native-navigation';

/*
TODO:
[ ] Export Styles
[ ] Refactor!
[ ] How will we handle temp in celsius vs f?
[ ] Show product carousel
[ ] FIX: core cms integration
*/

// NOTE -> weatherRes.windspeed
// NOTE -> weather .temo -> CELSIUS
//

export interface ProductKit {
  kit: string;
  products: ProductControllersTypes.Product[];
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: font.orbitronRegular,
    letterSpacing: 0.5,
    marginBottom: 6
  },
  indoorRecommended: {
    marginVertical: 8,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 17,
    letterSpacing: 0.5,
    fontStyle: 'italic'
  }
});

const RecommendedEquipment = ({ weatherRecommendationsProps }: any) => {
  const [locationName, setLocationName] = useState('');
  const [weatherConditions, setWeatherConditions] = useState<{
    rain?: {'1h': number};
    wind_speed: string;
    weather: { main: string }[];
    temp: string;
  }>();
  const [productKits, setProductKits] = useState<ProductKit[]>([]);
  const [isIndoorRideRecommended, setIsIndoorRideRecommended] = useState<boolean>();
  const [loading, setLoading] = useState(true);
  const [changeLocation, setChangeLocation] = useState(false);

  const HEADER = i18n.string(
    isIndoorRideRecommended ?
      keys.weatherRecommendations.recommendations.noOutdoorRide :
      keys.weatherRecommendations.recommendations.header
  );

  const temprature = React.useMemo(() => {
    if (weatherConditions) {
      const fahrenheit = Math.round((Number(weatherConditions?.temp) * 1.8) + 32);
      if (getCountry() === 'US') {
        return fahrenheit + '\u00B0F';
      } else {
        const roundedCelsius = weatherConditions.temp ?
          Math.round(Number(weatherConditions.temp)) : '';
        return `${roundedCelsius}\u00B0C`;
      }
    }
    return null;
  }, [weatherConditions]);

  const rainfall = React.useMemo(() => {
    const rain = weatherConditions?.rain?.['1h'] ?? 0;
    return ` \u2022 ${rain}mm`;
  }, [weatherConditions]);

  const speed = React.useMemo(() => {
    if (weatherConditions) {
      const miles = Number(weatherConditions.wind_speed) * 0.62137;
      const mDecimal = miles.toPrecision(2);
      if (getCountry() === 'US') {
        return mDecimal + 'mi/h';
      } else {
        return `${weatherConditions?.wind_speed} km/h`;
      }
    }
    return null;
  }, [weatherConditions]);

  const handleChangeLocation = () => setChangeLocation(!changeLocation);

  const fetchWeatherProductRecs = async () => {
    google
    .reverseGeolocate(weatherRecommendationsProps.locationCoords)
    .then(setLocationName)
    .catch();
    magento
      .fetchWeatherProductRecs(weatherRecommendationsProps.locationCoords)
      .then(res => {
        setWeatherConditions(res.weatherConditions);
        setIsIndoorRideRecommended(res.isIndoorRideRecommended);
        setProductKits(res.products);
        setLoading(false);
        return;
      })
      .catch();
  };

  useEffect(() => {
    const discoverScreenEventListener = Navigation.events().registerComponentDidAppearListener(
      ({componentId}) => {
        if (componentId === '/discover') {
          setLoading(true);
          fetchWeatherProductRecs().catch();
        }
      }
    );
    return () => {
      discoverScreenEventListener.remove();
    };
  }, []);

  useEffect(() => {
    fetchWeatherProductRecs().catch();
  }, [weatherRecommendationsProps.locationCoords]);

  return (
    <ImageBackground
      resizeMode='cover'
      source={assetsImages.recommendedEquipmentBg}
      style={{ width: '100%' }}
    >
      <ChangeLocation
        changeLocation={changeLocation}
        handleChangeLocation={handleChangeLocation}
        setLocationCoords={weatherRecommendationsProps.setLocationCoords}
      />
      <View
        style={{
          marginLeft: 20,
          marginVertical: 25,
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          padding: 25,
          paddingRight: 0
        }}
      >
        <Text style={styles.header}>{HEADER}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={icons.contextualWeatherBg}
            style={{ height: 16, resizeMode: 'contain', marginRight: 6 }}
          />
          <Text
            style={{
              lineHeight: 24,
              fontFamily: font.maisonNeueRegular
            }}
          >
            {weatherConditions && `${weatherConditions.weather[0].main} in `}
            <Text
              onPress={handleChangeLocation}
              style={{
                textDecorationLine: 'underline',
                fontWeight: '500'
              }}
            >
              {locationName.toUpperCase()}
            </Text>
          </Text>
        </View>

        <Text
          style={{
            fontSize: 45,
            fontFamily: font.maisonNeueRegular
            // marginVertical: 6
          }}
        >
          {temprature}
        </Text>
        <Text
          style={{
            fontSize: 13,
            // lineHeight: 65,
            fontFamily: font.maisonNeueRegular,
            marginVertical: 6
          }}
        >
          {speed}{rainfall}
        </Text>
        {isIndoorRideRecommended && (
          <Text style={styles.indoorRecommended}>
            {i18n.string(keys.weatherRecommendations.recommendations.indoorTraining)}
          </Text>
        )}
        {!productKits.length && loading ? (
          <SearchGhost />
        ) : (
          <RecommendationsCarousel data={productKits} />
        )}
      </View>
    </ImageBackground>
  );
};

export default RecommendedEquipment;

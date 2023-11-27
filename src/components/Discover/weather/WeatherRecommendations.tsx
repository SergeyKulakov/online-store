import {
  AsyncStorageKeys,
  getStorageValue,
  requestLocationPermission
} from '@assos/lib';
import React, { useEffect, useState } from 'react';
import ContextualPrompt from './ContextualPrompt';
import RecommendedEquipment from './RecommendedEquipment';
import Geolocation from 'react-native-geolocation-service';
import NoLocationServices from './NoLocationServices';

const WeatherRecommendations = () => {
  const [locationCoords, setLocationCoords] = useState('');
  const [userPrompted, setUserPrompted] = useState<undefined | string>();
  const weatherRecommendationsProps = {
    setLocationCoords,
    locationCoords,
    userPrompted,
    setUserPrompted
  };
  useEffect(() => {
    if (!userPrompted) {
      getStorageValue(AsyncStorageKeys.PromptedForLocation)
        .then(setUserPrompted)
        .catch();
    }

    if (userPrompted) {
      requestLocationPermission()
        .then(res => {
          if (res) {
            Geolocation.getCurrentPosition(({ coords }) => {
              weatherRecommendationsProps.setLocationCoords(
                `${coords.latitude},${coords.longitude}`
              );
            });
          }
        })
        .catch();
    }
  }, [userPrompted]);

  switch (userPrompted) {
    case 'true':
      if (locationCoords !== '') {
        return (
          <RecommendedEquipment
            weatherRecommendationsProps={weatherRecommendationsProps}
          />
        );
      } else {
        return (
          <NoLocationServices
            weatherRecommendationsProps={weatherRecommendationsProps}
          />
        );
      }
      break;
    default:
      return (
        <ContextualPrompt
          weatherRecommendationsProps={weatherRecommendationsProps}
        />
      );
  }
};

export default WeatherRecommendations;

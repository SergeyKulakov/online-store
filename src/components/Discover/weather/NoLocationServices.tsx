import {
  AppState,
  Image,
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React, { useEffect } from 'react';
import { i18n, keys, requestLocationPermission } from '@assos/lib';
import Geolocation from 'react-native-geolocation-service';
import { assetsImages, fonts } from '@assos/styles';
import { useNavigator } from '@brandingbrand/fsapp';
import { useSelector } from 'react-redux';
import { getCategories, getParentCategoryIds } from '@assos/state/categories';
import { useStylePreferences } from '@assos/hooks/useStylePreferences';

type seasonCode = 'summer' | 'springFall' | 'winter' | 'all';

type SeasonKey = {
  [k in seasonCode]: string
};

const menSeasonIds: SeasonKey = {
  summer: '35',
  springFall: '36',
  winter: '37',
  all: '93'
};

const womenSeasonIds: SeasonKey = {
  summer: '77',
  springFall: '78',
  winter: '79',
  all: '94'
};

const styles = StyleSheet.create({
  seasonImage: {
    height: 185,
    maxWidth: 150,
    resizeMode: 'contain'
  },
  seasonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  seasonText: {
    marginTop: 10,
    marginBottom: 24,
    fontSize: 15,
    fontFamily: fonts.maisonNeue,
    fontWeight: '500'
  }
});

const NoLocationServices = ({ weatherRecommendationsProps }: any) => {
  const categories = useSelector(getCategories);
  const parentIds = useSelector(getParentCategoryIds);
  const navigator = useNavigator();
  const {stylePreferences} = useStylePreferences();

  const goToSeasonPIP = (code: seasonCode) => () => {
    if (!categories || !parentIds) { return; }
    // use gender from style preferences, default to men's clothing
    const genderPreference = stylePreferences?.womens && !stylePreferences.mens ?
      'WOMAN' : 'MAN';
    const key = genderPreference === 'WOMAN' ? womenSeasonIds : menSeasonIds;
    const seasonCategory = categories.find(c => c.object_id === key[code]);
    if (seasonCategory) {
      navigator.open('/shop/pindex', {title: seasonCategory.name, id: seasonCategory.object_id});
    }
  };
  const handleLocationPermissions = () => {
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
  };

  const handleTapText = () => {
    Linking.openSettings().finally(handleLocationPermissions).catch();
  };
  useEffect(() => {
    handleLocationPermissions();
  }, [AppState]);
  return (
    <ImageBackground
      resizeMode='cover'
      source={assetsImages.recommendedEquipmentBg}
      style={{ width: '100%' }}
    >
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 25,
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          padding: 12
        }}
      >
        <Text
          style={{
            textTransform: 'uppercase',
            fontFamily: fonts.orbitron,
            fontSize: 18,
            padding: 12,
            fontWeight: '500'
          }}
        >
          {i18n.string(keys.weatherRecommendations.noLocationServices.header)}
        </Text>
        <Text
          style={{
            fontSize: 12,
            paddingHorizontal: 12,
            paddingBottom: 20,
            fontFamily: fonts.maisonNeue,
            textDecorationLine: 'underline'
          }}
          onPress={handleTapText}
        >
          {i18n.string(keys.weatherRecommendations.noLocationServices.prompt)}
        </Text>
        <View style={styles.seasonRow}>
          <TouchableOpacity onPress={goToSeasonPIP('summer')}>
            <Image
              source={assetsImages.summerSeason}
              style={styles.seasonImage}
            />
            <Text style={styles.seasonText}>
              {i18n.string(
                keys.weatherRecommendations.noLocationServices.summer
              )}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToSeasonPIP('springFall')}>
            <Image
              source={assetsImages.springSeason}
              style={styles.seasonImage}
            />
            <Text style={styles.seasonText}>
              {i18n.string(
                keys.weatherRecommendations.noLocationServices.springFall
              )}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.seasonRow}>
          <TouchableOpacity onPress={goToSeasonPIP('winter')}>
            <Image
              source={assetsImages.winterSeason}
              style={styles.seasonImage}
            />
            <Text style={styles.seasonText}>
              {i18n.string(
                keys.weatherRecommendations.noLocationServices.winter
              )}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToSeasonPIP('all')}>
            <Image
              source={assetsImages.allYearSeason}
              style={styles.seasonImage}
            />
            <Text style={styles.seasonText}>
              {i18n.string(
                keys.weatherRecommendations.noLocationServices.allYear
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default NoLocationServices;

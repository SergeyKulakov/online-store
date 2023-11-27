import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React from 'react';
import { assetsImages, font, icons } from '@assos/styles';
import {
  i18n,
  keys,
  requestLocationPermission,
  userHasBeenPromptedForLocation
} from '@assos/lib';
import Geolocation from 'react-native-geolocation-service';

const styles = StyleSheet.create({
  contextualPrompt: {
    height: 284,
    paddingHorizontal: 18,
    paddingTop: 84,
    paddingRight: 72
  },
  header: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: font.orbitronRegular,
    letterSpacing: 0.5,
    marginBottom: 6
  },
  prompt: {
    fontFamily: font.maisonNeueRegular,
    fontSize: 15,
    letterSpacing: 0.5,
    lineHeight: 22,
    marginBottom: 30
  },
  cta: {
    backgroundColor: 'black',
    flexDirection: 'row',
    paddingVertical: 10,
    textAlignVertical: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  ctaTextStyle: {
    color: 'white',
    fontSize: 13,
    fontWeight: '500'
  },
  ctaIcon: {
    height: 18,
    resizeMode: 'contain',
    marginRight: 6
  }
});
const ContextualPrompt = ({ weatherRecommendationsProps }: any) => {
  const header = i18n.string(
    keys.weatherRecommendations.contextualPrompt.header
  );
  const prompt = i18n.string(
    keys.weatherRecommendations.contextualPrompt.prompt
  );
  const ctaText = i18n.string(keys.weatherRecommendations.contextualPrompt.cta);

  const handleLocationPrompt = async () => {
    const isLocation = await requestLocationPermission();
    if (!isLocation) {
      userHasBeenPromptedForLocation();
      weatherRecommendationsProps.setUserPrompted('true');
      return;
    }
    userHasBeenPromptedForLocation();
    weatherRecommendationsProps.setUserPrompted('true');
    Geolocation.getCurrentPosition(({ coords }) => {
      weatherRecommendationsProps.setLocationCoords(
        `${coords.latitude},${coords.longitude}`
      );
    });
    return;
  };

  return (
    <View>
      <ImageBackground
        source={assetsImages.contextualWeatherBg}
        resizeMode='cover'
        style={styles.contextualPrompt}
      >
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.prompt}>{prompt}</Text>
        <TouchableOpacity style={styles.cta} onPress={handleLocationPrompt}>
          <Image source={icons.contextualWeatherBg} style={styles.ctaIcon} />
          <Text style={styles.ctaTextStyle}>{ctaText}</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default ContextualPrompt;

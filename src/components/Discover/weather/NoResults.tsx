import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { font } from '@assos/styles';
import i18n, {keys} from '@assos/lib/translations';

const styles = StyleSheet.create({
  header: {
    fontFamily: font.orbitronRegular,
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  },
  subheader: {
    fontFamily: font.maisonNeueRegular,
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '400'
  },
  container: {
    paddingTop: 116
  }
});

export const NoResults = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.header}>
        {i18n.string(keys.weatherRecommendations.recommendations.noRecommendations)}
      </Text>
      <Text style={styles.subheader}>
        {i18n.string(keys.weatherRecommendations.recommendations.tryDifferent)}
      </Text>
    </View>
  );
};

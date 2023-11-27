import { i18n, keys } from '@assos/lib';
import { assetsImages, fontFamily, fonts, lightMode } from '@assos/styles';
import React, { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export interface SettingsTopBarProps {
  toggleSettings: () => void;
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    backgroundColor: lightMode.systemBackgroundSecondary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 14
  },
  title: {
    color: lightMode.textBanner,
    fontFamily: fonts.orbitron,
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 1,
    textTransform: 'uppercase'
  },
  logoutText: {
    color: lightMode.textButtonLabelPrimary,
    fontFamily,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 21,
    letterSpacing: 0.5,
    textDecorationLine: 'underline'
  }
});

const SettingsTopBar: FC<SettingsTopBarProps> = ({ toggleSettings }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleSettings}>
        <Image source={assetsImages.arrowBackWhite}/>
      </TouchableOpacity>
      <Text style={styles.title}>
        {i18n.string(keys.account.appSetting)}
      </Text>
      <View/>
    </View>
  );
};

export default SettingsTopBar;

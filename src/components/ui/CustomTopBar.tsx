import {
  i18n, keys } from '@assos/lib';
import {logout} from '@assos/state/user';
import { assetsImages, fontFamily, fonts, lightMode } from '@assos/styles';
import React, { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {useDispatch} from 'react-redux';

export interface CustomTopBarProps {
  title?: string;
  toggleSettings?: () => void;
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
  settingsGear: {
    height: 24,
    width: 24
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

const CustomTopBar: FC<CustomTopBarProps> = ({ title, toggleSettings }) => {
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    await logout(dispatch);
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleSettings}>
        <Image source={assetsImages.gearWhite} style={styles.settingsGear}/>
      </TouchableOpacity>
      <Text style={styles.title}>
        {title}
      </Text>
      <TouchableOpacity onPress={handleSignOut}>
      <Text style={styles.logoutText}>
        {i18n.string(keys.accountDetails.signOut)}
      </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomTopBar;

import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { makeScreen, useNavigator } from '@brandingbrand/fsapp';
import { ScreenWrapper } from '@assos/components';
import { fontFamily, lightMode as palette } from '@assos/styles';
import CTAButton from '@assos/components/ui/CTAButton';
import i18n, { keys } from '@assos/lib/translations';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getCustomerEmail, logout } from '@assos/state/user';
import { getCountry } from 'react-native-localize';
import { determineUserSignInStatus } from '@assos/lib';
import { Header } from '@assos/components/ui/Header';
import { isIos } from '@assos/helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textSection: {
    paddingHorizontal: 39,
    paddingBottom: 32
  },
  title: {
    fontFamily,
    fontSize: 23,
    color: palette.textPrimaryLM,
    fontWeight: '600',
    textAlign: 'center'
  },
  body: {
    fontFamily,
    fontSize: 14,
    fontWeight: '400',
    color: '#141414',
    marginTop: 16,
    textAlign: 'center'
  },
  btnSection: {
    paddingHorizontal: 20,
    width: '100%'
  },
  btn: {
    width: '100%'
  },
  btnText: {
    fontWeight: '400',
    fontSize: 14
  },
  deleteBtn: {
    backgroundColor: palette.systemBackgroundPrimary,
    borderColor: palette.textError,
    marginBottom: 12
  },
  deleteBtnText: {
    color: palette.textError
  }
});

export const DeleteAccount = makeScreen(() => {
  const dispatch = useDispatch();
  const navigator = useNavigator();
  const email = useSelector(getCustomerEmail);
  const handleBack = () => navigator.pop();
  const handleDeletePress = useCallback(async () => {
    const isLoggedIn = await determineUserSignInStatus();
    if (isLoggedIn) {
      await deleteUser(dispatch, {
        email,
        store: getCountry()
      });
      await logout(dispatch).then(() => navigator.popToRoot());
    }
  }, []);

  const handleKeepPress = useCallback(() => {
    navigator.popToRoot();
  }, []);

  return (
    <ScreenWrapper>
      {isIos &&
        (<Header backAction={handleBack} title={i18n.string(keys.account.settings.deleteAccount)}/>)
      }
      <View style={styles.container}>
        <View style={styles.textSection}>
          <Text style={styles.title}>{i18n.string(keys.accountDelete.areYourSure)}</Text>
          <Text style={styles.body}>{i18n.string(keys.accountDelete.deleteDetails)}</Text>
        </View>
        <View style={styles.btnSection}>
          <CTAButton
            style={[styles.btn, styles.deleteBtn]}
            styleText={[styles.btnText, styles.deleteBtnText]}
            text={i18n.string(keys.accountDelete.deleteCta)}
            handleOnPress={handleDeletePress}
          />
          <CTAButton
            style={styles.btn}
            styleText={styles.btnText}
            text={i18n.string(keys.accountDelete.keepCta)}
            handleOnPress={handleKeepPress}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
},
  { statusBar: { style: 'light' } }
);

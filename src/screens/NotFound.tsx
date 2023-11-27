import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { makeScreen } from '@brandingbrand/fsapp';
import { i18n, keys } from '@assos/lib';
import { ScreenWrapper } from '@assos/components';
import LogoHeader from '@assos/components/LogoHeader';
import { useOnboarding } from '@assos/hooks/useOnboarding';
import { noop } from 'lodash-es';

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 100,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  notfoundtext: {
    color: '#999',
    fontWeight: 'bold',
    fontSize: 28
  },
  message: {
    color: '#444',
    textAlign: 'center',
    fontSize: 15,
    marginTop: 20
  }
});

export const NotFound = makeScreen(() => {
  const { launchOnboardingIfNecessary } = useOnboarding();

  useEffect(() => {
    launchOnboardingIfNecessary().catch(noop);
  }, []);

  return (
    <ScreenWrapper hideWebFooter={true} hideWebHeader={true}>
      <LogoHeader />
      <View style={styles.container}>
        <Text style={styles.notfoundtext}>
          {i18n.string(keys.notFound.title)}
        </Text>
        <Text style={styles.message}>{i18n.string(keys.notFound.body)}</Text>
      </View>
    </ScreenWrapper>
  );
});

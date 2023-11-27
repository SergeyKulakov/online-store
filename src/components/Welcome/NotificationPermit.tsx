import { Image, Text, View } from 'react-native';
import React from 'react';

import { logError } from '@brandingbrand/flagship/src/helpers';
import { requestNotificationPermission } from '@assos/lib/permissions';
import CTAButton, { CTAButtonTypes } from '@assos/components/ui/CTAButton';
import { i18n, keys } from '@assos/lib';
import { useNavigator } from '@brandingbrand/fsapp';

import { assetsImages } from '@assos/styles';
import { styles } from './styles';

export const NotificationPermit = () => {
  const navigator = useNavigator();

  const handlePress = () => {
    requestNotificationPermission().catch(logError).finally(() => navigator.popTo('/discover'))
      .catch(logError);
  };

  return (
    <View style={styles.notificationContainer}>
      <View style={styles.notificationBody}>
        <Text style={[styles.notificationTitle, styles.lightText]}>
          {i18n.string(keys.onBoarding.getAlerts)}
        </Text>
        <Image style={styles.notificationImage} source={assetsImages.onBoardingBike}/>
      </View>
      <View>
        <Text style={styles.pleaseSelect}>
          {i18n.string(keys.onBoarding.describePermissions)}
        </Text>
      </View>
      <CTAButton
        styleText={[styles.skipBtnText, styles.nextBtnText]}
        type={CTAButtonTypes.secondary}
        text={i18n.string(keys.onBoarding.continue)}
        handleOnPress={handlePress}
      />
    </View>
  );
};

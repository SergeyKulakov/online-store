import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { CTAButtonTypes } from '@assos/components';
import { styles } from './styles';
import { i18n, keys, requestNotificationPermission } from '@assos/lib';
import CTAButton from '@assos/components/ui/CTAButton';
import { openSettings } from 'react-native-permissions';


const NotificationPreferencesComponent = () => {
  const [allow, setAllow] = useState(false);
  const handleToggle = async () => {
    await openSettings();
    const notificationStatus = await requestNotificationPermission();
    setAllow(notificationStatus);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.describeText}>
        {
          allow
            ? i18n.string(keys.notificationPreferences.disableText)
            : i18n.string(keys.notificationPreferences.allowText)
        }
      </Text>
      <CTAButton
        handleOnPress={handleToggle}
        styleText={[
          styles.ctaText,
          (allow ? styles.ctaDisable : styles.ctaEnable)
        ]}
        type={allow ? CTAButtonTypes.secondary : CTAButtonTypes.primary}
        text={allow ? i18n.string(keys.CTAButton.disable) : i18n.string(keys.CTAButton.enable)}
      />
    </View>
  );
};

export default NotificationPreferencesComponent;

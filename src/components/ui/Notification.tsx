import React, { FC, useEffect } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';

import { assetsImages, fontFamily, lightMode as palette } from '@assos/styles';

const styles = StyleSheet.create({
  bannerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    padding: 11,
    marginBottom: 24,
    flex: 1
  },
  bannerImage: {
    width: 14,
    height: 14,
    marginRight: 5
  },
  bannerText: {
    fontFamily,
    color: palette.textNotification,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.5,
    fontWeight: '600',
    flex: 1
  },
  bannerTextLimit: {
    width: '80%'
  },
  backgroundDefault: {
    backgroundColor: palette.systemBackgroundPopover
  },
  backgroundSuccess: {
    backgroundColor: '#5D9D52'
  },
  backgroundError: {
    backgroundColor: palette.systemBackgroundError
  },
  close: {
    position: 'absolute',
    top: 20,
    right: 20
  }
});

export enum NotificationType {
  DEFAULT = 'default',
  SUCCESS = 'success',
  ERROR = 'error'
}

const icons: Record<NotificationType, ImageSourcePropType | null> = {
  [NotificationType.DEFAULT]: null,
  [NotificationType.SUCCESS]: assetsImages.whiteCheck,
  [NotificationType.ERROR]: assetsImages.whiteError
};

const stylesByType: Record<NotificationType, StyleProp<ViewStyle>> = {
  [NotificationType.DEFAULT]: styles.backgroundDefault,
  [NotificationType.SUCCESS]: styles.backgroundSuccess,
  [NotificationType.ERROR]: styles.backgroundError
};

interface NotificationProps {
  children: string;
  type?: NotificationType;
  showCloseIcon?: boolean;
  onCloseHandler?: () => void;
  isTimer?: boolean;
  hidePopupTime?: number;
}

const DEFAULT_HIDE_TIME = 4000;

export const Notification: FC<NotificationProps> = ({
  children,
  showCloseIcon,
  onCloseHandler,
  type = NotificationType.DEFAULT,
  isTimer = false,
  hidePopupTime = DEFAULT_HIDE_TIME
}) => {
  useEffect(() => {
    if (!isTimer) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      if (onCloseHandler) {
        onCloseHandler();
      }
    }, hidePopupTime);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <View
      style={[styles.bannerContainer, stylesByType[type]]}
    >
      {type && icons[type] !== null && (
        <Image
          source={icons[type] as ImageSourcePropType}
          style={[styles.bannerImage]}
        />
      )}
      <Text style={[styles.bannerText, showCloseIcon && styles.bannerTextLimit]}>
        {children}
      </Text>
      {showCloseIcon && onCloseHandler && (
        <TouchableOpacity
          style={styles.close}
          onPress={onCloseHandler}
          activeOpacity={0.7}
          hitSlop={{
            top: 10,
            right: 10,
            bottom: 10,
            left: 10
          }}
        >
          <Image source={assetsImages.whiteClose}/>
        </TouchableOpacity>
      )}
    </View>
  );
};

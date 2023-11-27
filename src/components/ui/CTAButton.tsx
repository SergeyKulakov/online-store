import React, { ReactNode, useState } from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import { i18n, keys } from '@assos/lib';
import { assetsImages, fontFamily, lightMode as palette } from '@assos/styles';
import { CTALoader, CTALoaderProps } from './CTALoader';

export { CTAButtonTypesSpinner } from './CTALoader';

interface CTAButtonProps extends CTALoaderProps {
  text?: string;
  type?: CTAButtonTypes;
  styleText?: StyleProp<TextStyle>;
  activeOpacity?: number;
  style?: StyleProp<ViewStyle>;
  enableLoading?: boolean;
  loading?: boolean;
  handleOnPress?: () => void | Promise<void>;
  useHaptics?: boolean;
  showLockIcon?: boolean;
  wishlistSuccess?: boolean;
  disabled?: boolean;
}

export enum CTAButtonTypes {
  primary,
  secondary,
  wishlist,
  apple,
  paypal,
  empty,
  underline,
  facebook,
  google
}

const styles = StyleSheet.create({
  wrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.buttonPrimary,
    borderColor: palette.buttonPrimary,
    borderWidth: 1,
    height: 55
  },
  text: {
    fontFamily,
    fontStyle: 'normal',
    fontWeight: '500',
    textTransform: 'uppercase',
    fontSize: 18,
    lineHeight: 21,
    letterSpacing: 1,
    color: palette.textButtonLabelPrimary,
    paddingHorizontal: 8
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  underlineWrap: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0
  },
  underlineText: {
    textDecorationLine: 'underline'
  },
  labelPrimary: {
    color: palette.textButtonLabelPrimary
  },
  labelSecondary: {
    color: palette.textButtonLabelSecondary
  },
  textPrimary: {
    color: palette.textPrimary
  },
  btnEmpty: {
    backgroundColor: palette.bordersInactive,
    borderColor: palette.bordersInactive
  },
  btnWishlist: {
    backgroundColor: palette.systemBackgroundPrimary,
    borderColor: palette.buttonBorderSecondary
  },
  btnSecondary: {
    backgroundColor: palette.buttonSecondary,
    borderColor: palette.buttonBorderSecondary
  },
  btnPaypal: {
    backgroundColor: palette.buttonPrimaryHover,
    borderColor: palette.buttonPrimaryHover
  },
  btnApple: {
    backgroundColor: palette.systemBackgroundPrimary,
    borderColor: palette.bordersPrimary
  },
  facebook: {
    backgroundColor: palette.facebookBtnAlt,
    borderColor: palette.facebookBtnAlt,
    borderRadius: 0
  },
  google: {
    borderColor: palette.googleBtnAlt,
    borderRadius: 0,
    backgroundColor: palette.googleBtnAlt
  },
  googleText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    color: palette.textButtonLabelPrimary,
    fontFamily,
    fontWeight: '500',
    fontSize: 19,
    letterSpacing: 0.22
  },
  googleLogoWrapper: {
    height: 53,
    width: 53,
    backgroundColor: palette.systemBackgroundPrimary,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

// tslint:disable-next-line:cyclomatic-complexity
export const CTAButton = (props: CTAButtonProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onClick = () => {
    const { handleOnPress } = props;

    if (handleOnPress) {
      setIsLoading(true);
      const handlePromise = async () => handleOnPress();
      if (handlePromise) {
        handlePromise()
          .then(() => {
            setIsLoading(false);
            if (props.useHaptics) {
              ReactNativeHapticFeedback.trigger('notificationSuccess');
            }
          })
          .catch(e => {
            setIsLoading(false);
            console.error(e);
            if (props.useHaptics) {
              ReactNativeHapticFeedback.trigger('notificationError');
            }
          });
      }
    }
  };

  const renderLoader = (): JSX.Element => {
    return (
      <CTALoader
        customIconSpinner={props.customIconSpinner}
        typeSpinner={props.typeSpinner}
      />
    );
  };

  const renderWithLock = (): JSX.Element => {
    const { type, styleText, text, showLockIcon } = props;
    return (
      <View style={styles.flexContainer}>
        {showLockIcon && type !== CTAButtonTypes.secondary && (
          <Image source={assetsImages.lock} />
        )}
        {type === CTAButtonTypes.wishlist && (
          <Image source={assetsImages.favorite} />
        )}
        <Text
          style={[
            styles.text,
            styleText,
            type === CTAButtonTypes.primary && styles.labelPrimary,
            type === CTAButtonTypes.secondary && styles.labelSecondary,
            type === CTAButtonTypes.wishlist && styles.textPrimary
          ]}
        >
          {text || i18n.string(keys.CTAButton.submit)}
        </Text>
      </View>
    );
  };

  const renderWishList = (): JSX.Element => {
    const { type, styleText, text, wishlistSuccess } = props;
    return (
      <View style={styles.flexContainer}>
        <>
          {wishlistSuccess ? (
            <Image source={assetsImages.favoriteBlack} />
          ) : (
            <Image source={assetsImages.favorite} />
          )}
          <Text
            style={[
              styles.text,
              styleText,
              type === CTAButtonTypes.wishlist && styles.textPrimary
            ]}
          >
            {text || i18n.string(keys.CTAButton.submit)}
          </Text>
        </>
      </View>
    );
  };

  const renderBtn = (): ReactNode | null => {
    const { type } = props;

    switch (type) {
      case CTAButtonTypes.apple:
        return <Image source={assetsImages.applePay} />;
      case CTAButtonTypes.paypal:
        return <Image source={assetsImages.paypal} />;
      case CTAButtonTypes.facebook:
        return <Image source={assetsImages.facebookLogo} />;
      case CTAButtonTypes.google:
        return (
          <>
            <View style={styles.googleLogoWrapper}>
              <Image source={assetsImages.google} />
            </View>
            <Text style={styles.googleText}>{props.text}</Text>
          </>
        );
      case CTAButtonTypes.empty:
        return <Text style={props.styleText}>{props.text}</Text>;
      case CTAButtonTypes.wishlist:
        return renderWishList();
      case CTAButtonTypes.underline:
        return (
          <Text style={[styles.underlineText, props.styleText]}>
            {props.text}
          </Text>
        );
      case CTAButtonTypes.primary:
        return <Text style={props.styleText}>{props.text}</Text>;
      case CTAButtonTypes.secondary:
        return <Text style={props.styleText}>{props.text}</Text>;
      default:
        return renderWithLock();
    }
  };

  const { activeOpacity, style, type, loading, enableLoading, disabled } = props;
  let typeStyle = {
    backgroundColor: palette.buttonPrimary,
    borderColor: palette.buttonPrimary
  };
  switch (type) {
    case CTAButtonTypes.secondary:
      typeStyle = styles.btnSecondary;
      break;
    case CTAButtonTypes.apple:
      typeStyle = styles.btnApple;
      break;
    case CTAButtonTypes.paypal:
      typeStyle = styles.btnPaypal;
      break;
    case CTAButtonTypes.wishlist:
      typeStyle = styles.btnWishlist;
      break;
    case CTAButtonTypes.empty:
      typeStyle = { ...styles.btnEmpty, ...{ style } };
      break;
    case CTAButtonTypes.underline:
      typeStyle = styles.underlineWrap;
      break;
    case CTAButtonTypes.facebook:
      typeStyle = styles.facebook;
      break;
    case CTAButtonTypes.google:
      typeStyle = styles.google;
      break;
    default:
  }

  return (
    <TouchableOpacity
      style={[styles.wrap, typeStyle, style]}
      activeOpacity={activeOpacity || 0.7}
      onPress={onClick}
      disabled={disabled}
    >
      {(isLoading && enableLoading) || loading ? renderLoader() : renderBtn()}
    </TouchableOpacity>
  );
};

export default CTAButton;

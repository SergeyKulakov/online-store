import React, { FC } from 'react';
import {
  Dimensions,
  Image,
  InputAccessoryView,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

/** misc */
import i18n, { keys } from '@assos/lib/translations';
import { assetsImages } from '@assos/styles/variables';

/** styles */
import { lightMode as palette } from '@assos/styles';
import { isAndroid } from '@assos/helpers/common';


const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    width,
    height: 45
  },
  leftButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  arrowButton: {
    marginRight: 15
  },
  arrowUp: {
    transform: [{ rotate: '180deg' }]
  },
  arrowImage: {
    tintColor: palette.accessoryBlue,
    height: 10,
    width: 20
  },
  arrowDisabled: {
    tintColor: palette.iconInactive,
    height: 10,
    width: 20
  },
  doneText: {
    color: palette.accessoryBlue,
    fontWeight: '700',
    textTransform: 'capitalize'
  }
});

interface KeyboardAccessoryProps {
  id: string;
  isLeftArrowDisabled: boolean;
  onLeftArrowPress: () => void;
  onRightArrowPress: () => void;
  isRightArrowDisabled: boolean;
}

export const KeyboardAccessory: FC<KeyboardAccessoryProps> = ({
  id,
  isLeftArrowDisabled,
  onLeftArrowPress,
  onRightArrowPress,
  isRightArrowDisabled
}) => {
  if (isAndroid) {
    return null;
  }

  const dismissKeyboard = () => Keyboard.dismiss();
  return (
    <InputAccessoryView nativeID={id}>
      <View style={styles.container}>
        <View style={styles.leftButtons}>
          <TouchableOpacity
            style={styles.arrowButton}
            onPress={onLeftArrowPress}
            disabled={isLeftArrowDisabled}
          >
            <Image
              source={assetsImages.arrowDown}
              style={[
                styles.arrowUp,
                isLeftArrowDisabled ? styles.arrowDisabled : styles.arrowImage
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.arrowButton}
            onPress={onRightArrowPress}
            disabled={isRightArrowDisabled}
          >
            <Image
              source={assetsImages.arrowDown}
              style={isRightArrowDisabled ? styles.arrowDisabled : styles.arrowImage}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={dismissKeyboard}>
          <Text style={styles.doneText}>{i18n.string(keys.joinNowForm.done)}</Text>
        </TouchableOpacity>
      </View>
    </InputAccessoryView>
  );
};

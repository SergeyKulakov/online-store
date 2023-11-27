import React from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageURISource,
  StyleProp,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ViewStyle
} from 'react-native';

const LINK_TITLE_HEIGHT_DEFAULT = 50;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  iconImage: {
    width: 15,
    height: 15
  },
  titleTouchStyle: {
    flex: 1,
    paddingHorizontal: 16,
    height: LINK_TITLE_HEIGHT_DEFAULT
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    flex: 1
  }
});

export interface LinkProps {
  style: StyleProp<ViewStyle>;
  title: string | JSX.Element;
  closedIconImage: ImageURISource;
  onPress?: (event: GestureResponderEvent) => void;
}

export const Link: React.FC<LinkProps> = ({
  style: customStyle,
  closedIconImage,
  title,
  onPress
}) => {
  const Title = () => {
    return (
      <View style={styles.title}>{typeof title === 'string' ? <Text>{title}</Text> : title}</View>
    );
  };

  return (
    <View style={[styles.container, customStyle]}>
      <TouchableHighlight
        style={styles.titleTouchStyle}
        onPress={onPress}
        underlayColor='transparent'
        accessibilityRole={'button'}
      >
        <View style={styles.titleContainer}>
          <Title />
          <Image source={closedIconImage} style={styles.iconImage} />
        </View>
      </TouchableHighlight>
    </View>
  );
};

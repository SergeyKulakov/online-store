import React, { FC, useCallback, useRef, useState } from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { assetsImages, font } from '@assos/styles';
import IconButton from '@assos/components/ui/IconButton';
import { ModalComponentProps } from '@brandingbrand/fsapp';
import colors from '@assos/styles/colors';

interface ModalWrapperProps extends Pick<ModalComponentProps, 'resolve' | 'reject'> {
  title?: string;
  keyboardAvoidingProp?: KeyboardAvoidingViewProps;
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 64
  },
  headerContainerActive: {
    borderBottomWidth: 1,
    borderColor: colors.separatorPrimary
  },
  title: {
    marginHorizontal: 50,
    fontFamily: font.orbitronRegular,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17.56,
    textTransform: 'uppercase'
  },
  contentContainer: {
    paddingHorizontal: 20
  },
  iconContainer: {
    position: 'absolute',
    right: 10
  }
});

interface ScrollContextProp {
  scrollTo?: () => void;
}

const height = Dimensions.get('window').height;

export const ScrollContext = React.createContext<ScrollContextProp>({});

const ModalWrapper: FC<ModalWrapperProps> = ({
  title,
  children,
  reject,
  keyboardAvoidingProp
}) => {
  const [headerActive, setHeaderActive] = useState<boolean>(false);
  const scrollRef = useRef<ScrollView>(null);
  const handleScroll = useCallback((e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setHeaderActive(e.nativeEvent.contentOffset.y > 0);
  }, []);

  const handleScrollTo = () => {
    scrollRef.current?.scrollTo(height);
  };

  return (
    <View>
      {!!title && (
        <View
          style={[
            styles.headerContainer,
            headerActive && styles.headerContainerActive
          ]}
        >
          <Text style={styles.title}>{title}</Text>
          <IconButton image={assetsImages.close} style={styles.iconContainer} onPress={reject} />
        </View>
      )}
      <KeyboardAvoidingView
        {...keyboardAvoidingProp}
      >
        <ScrollView
          ref={scrollRef}
          contentContainerStyle={styles.contentContainer}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          <ScrollContext.Provider value={{ scrollTo: handleScrollTo }}>
            {children}
          </ScrollContext.Provider>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ModalWrapper;

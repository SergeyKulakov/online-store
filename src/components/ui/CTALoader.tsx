import React, { useEffect, useRef, useState } from 'react';
import { assetsImages } from '@assos/styles';
import { Animated, Easing, Image, ImageURISource } from 'react-native';

export enum CTAButtonTypesSpinner {
  white,
  black,
  custom
}

export interface CTALoaderProps {
  typeSpinner?: CTAButtonTypesSpinner;
  customIconSpinner?: ImageURISource;
}

const CTASpinner = (props: CTALoaderProps) => {
  const { typeSpinner, customIconSpinner } = props;
  if (typeSpinner === CTAButtonTypesSpinner.black) {
    return <Image source={assetsImages.loaderBlack} />;
  }
  if (typeSpinner === CTAButtonTypesSpinner.custom && !!customIconSpinner) {
    return <Image source={customIconSpinner} />;
  }

  return <Image source={assetsImages.loaderWhite} />;
};


export const CTALoader = (props: CTALoaderProps) => {
  const [rotate] = useState<Animated.Value>(new Animated.Value(0));
  const animation = useRef<Animated.CompositeAnimation>();
  useEffect(() => {
    animation.current = Animated.loop(
      Animated.timing(rotate, {
        toValue: 1,
        easing: Easing.linear,
        duration: 1000,
        useNativeDriver: true
      })
    );
    animation.current.start();
    return () => {
      if (animation.current) {
        animation.current.stop();
      }
    };
  }, []);
  return (
    <Animated.View
      style={{
        transform: [
          {rotate: rotate.interpolate({
            inputRange: [0, 1],
            outputRange: [
              '0deg', '360deg'
            ]
          })}
        ]}
      }
    >
      <CTASpinner {...props} />
    </Animated.View>
  );
};

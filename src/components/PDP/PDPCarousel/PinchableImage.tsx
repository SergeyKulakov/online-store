import React, { useCallback, useRef, useState } from 'react';
import { Animated, Dimensions } from 'react-native';
import { PanGestureHandler, PinchGestureHandler, State } from 'react-native-gesture-handler';
import styles from './PDPCarousel.styles';

const { width, height } = Dimensions.get('window');


interface PinchableImageProps {
  uri: string;
}

export const PinchableImage = ({uri}: PinchableImageProps) => {
  const panRef = useRef();
  const pinchRef = useRef();

  const closeAnimation = useRef(new Animated.ValueXY({ x: 0, y: 0 }));

  const scaleAnimation = useRef(new Animated.Value(1));
  const baseScale = useRef(new Animated.Value(1));
  const scale = useRef(Animated.multiply(baseScale.current, scaleAnimation.current));
  const [lastScale, setLastScale] = useState(1);

  const onPanHandlerGesture = useCallback(({ nativeEvent }) => {
    closeAnimation.current.setValue({
      x: nativeEvent.translationX,
      y: nativeEvent.translationY
    });
  }, []);

  const onPanHandlerStateChange = useCallback(({ nativeEvent }) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      Animated.timing(closeAnimation.current, {
        useNativeDriver: true,
        toValue: { x: 0, y: 0 },
        duration: 100
      }).start();
    }
  }, [lastScale]);

  const onPinchGestureEvent = Animated.event([{ nativeEvent: { scale: scaleAnimation.current } }]);

  useCallback(({ nativeEvent }) => {
    scaleAnimation.current.setValue(nativeEvent.scale);
  }, [lastScale]);

  const onPinchHandlerStateChange = useCallback(({ nativeEvent }) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      const newLastScale = lastScale * nativeEvent.scale;
      setLastScale(newLastScale);
      baseScale.current.setValue(newLastScale);
      scaleAnimation.current.setValue(1);
    }
  }, []);


  return (
    <PanGestureHandler
      maxPointers={2}
      avgTouches
      onHandlerStateChange={onPanHandlerStateChange}
      minDist={10}
      onGestureEvent={onPanHandlerGesture}
      ref={panRef}
    >
      <Animated.View>
        <PinchGestureHandler
          ref={pinchRef}
          simultaneousHandlers={panRef}
          onHandlerStateChange={onPinchHandlerStateChange}
          onGestureEvent={onPinchGestureEvent}
        >
        <Animated.Image
          resizeMode={'contain'}
          source={{ uri }}
          style={[
            styles.imagePinchToZoom,
            {
              transform: [
                { perspective: 1000 },
                {
                  translateY: closeAnimation.current.y.interpolate({
                    inputRange: [-height, height],
                    outputRange: [-height, height],
                    extrapolate: 'clamp'
                  })
                },
                {
                  translateX: closeAnimation.current.x.interpolate({
                    inputRange: [-width, width],
                    outputRange: [-width, width],
                    extrapolate: 'clamp'
                  })
                },
                {
                  scale: scale.current.interpolate({
                    inputRange: [1, 2.5],
                    outputRange: [1, 2.5],
                    extrapolate: 'clamp'
                  })
                }
              ]
            }
          ]}
        />
        </PinchGestureHandler>
      </Animated.View>
    </PanGestureHandler>
  );
};

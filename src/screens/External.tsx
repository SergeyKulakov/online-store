import React from 'react';
import { Text, View } from 'react-native';
import { useRouteData } from '@brandingbrand/fsapp';
import { ScreenWrapper } from '@assos/components';

export const External = () => {
  const {uri} = useRouteData();
  return (
    <ScreenWrapper hideWebFooter={true} hideWebHeader={true} needInSafeArea>
      <View>
        <Text>{uri as string}</Text>
      </View>
    </ScreenWrapper>
  );
};

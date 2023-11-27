import { compose } from 'redux';
import React, { useCallback } from 'react';
import { eq, isFunction, lowerCase } from 'lodash-es';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

import { i18n, keys } from '@assos/lib';
import { fontFamily, lightMode as palette } from '@assos/styles';

import CTAButton, { CTAButtonTypes } from './CTAButton';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 25
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10
  },
  date: {
    color: palette.textPrimary,
    fontFamily,
    fontSize: 17,
    fontWeight: '800',
    lineHeight: 20,
    letterSpacing: 1,
    marginBottom: 22
  },
  text: {
    color: palette.textPrimary,
    fontFamily,
    fontSize: 15,
    lineHeight: 22,
    letterSpacing: 0.5,
    textTransform: 'capitalize'
  },
  title: {
    fontWeight: '800',
    marginRight: 4
  }
});

const isActive: (s: string) => boolean = compose(
  (status: string) => eq(status, 'active'),
  lowerCase
);

interface OrderHeaderProps {
  onTrackPress?: (trackingId: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
}


type Props = OrderHeaderProps &
  Pick<any, 'orderId' | 'status' | 'siteId' | 'trackingId' | 'creationDate'>;

const OrderHeader = ({
   containerStyle,
   creationDate,
   orderId,
   siteId,
   status,
   trackingId,
   onTrackPress
 }: Props) => {

  const handleTrackPress = useCallback(() => {
    if (isFunction(onTrackPress) && trackingId) {
      onTrackPress(trackingId);
    }

  }, [trackingId]);

  return (
    <View style={[containerStyle, styles.container]}>
      {!!creationDate ? (
        <Text style={styles.date}>{i18n.date(creationDate)}</Text>
      ) : null}
      <View style={styles.row}>
        <Text style={[styles.text, styles.title]}>
          {i18n.string(keys.myOrders.numberTitle)}
        </Text>
        <Text style={styles.text}>{orderId}</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.text, styles.title]}>
          {i18n.string(keys.myOrders.locationTitle)}
        </Text>
        <Text style={styles.text}>{siteId}</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.text, styles.title]}>
          {i18n.string(keys.myOrders.statusTitle)}
        </Text>
        <Text style={styles.text}>{status}</Text>
      </View>
      { !!trackingId ? (
        <View style={styles.row}>
          <Text style={[styles.text, styles.title]}>
            {i18n.string(keys.myOrders.trackingTitle)}
          </Text>
          <Text style={styles.text}>{trackingId}</Text>
        </View>
      ) : null}
      { isActive(status) && !!trackingId ? (
        <CTAButton
          handleOnPress={handleTrackPress}
          text={i18n.string(keys.myOrders.trackingButton)}
          type={CTAButtonTypes.secondary}
        />
      ) : null }
    </View>
  );
};

export default OrderHeader;

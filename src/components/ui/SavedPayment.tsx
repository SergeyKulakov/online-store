import { takeRight } from 'lodash-es';
import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CommerceTypes } from '@brandingbrand/fscommerce';

import { i18n, keys } from '@assos/lib';
import { fontFamily, lightMode as palette } from '@assos/styles';

import CTAButton, { CTAButtonTypes, CTAButtonTypesSpinner } from './CTAButton';

const styles = StyleSheet.create({
  wrapper: {
    borderBottomColor: palette.separatorPrimary,
    borderBottomWidth: 1,
    paddingTop: 19,
    paddingHorizontal: 20,
    paddingBottom: 30
  },
  header: {
    fontFamily,
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 22,
    letterSpacing: 0.5,
    marginBottom: 2,
    textTransform: 'capitalize'
  },
  text: {
    fontFamily,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.5
  },
  btnGroup: {
    marginTop: 15,
    flexDirection: 'row'
  },
  buttonTitle: {
    color: palette.textPrimary,
    fontFamily,
    fontSize: 13
  },
  button: {
    backgroundColor: palette.buttonTertiary,
    borderRadius: 0,
    borderWidth: 0,
    height: 32,
    paddingVertical: 0,
    width: 68
  }
});

interface SavedPaymentProps {
  id: string;
  onDelete: (id: string) => void;
  deleteId?: string;
}

type Props = CommerceTypes.PaymentCard & SavedPaymentProps;

const SavedPayment = ({
  id,
  onDelete,
  cardType,
  numberLastDigits,
  holder,
  expirationYear,
  expirationMonth
}: Props) => {

  const handleDelete = useCallback(() => {
    onDelete(id);
  }, [id]);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>
        {cardType + i18n.string(keys.paymentMethodComponent.dots) + numberLastDigits}
      </Text>
      <Text style={styles.text}>{holder}</Text>
      <Text style={styles.text}>
        {`${i18n.string(keys.creditCard.expires)} ${expirationMonth}/${
          takeRight(String(expirationYear), 2).join('')}`}
      </Text>
      <View style={styles.btnGroup}>
        <CTAButton
          type={CTAButtonTypes.secondary}
          typeSpinner={CTAButtonTypesSpinner.black}
          handleOnPress={handleDelete}
          style={styles.button}
          styleText={styles.buttonTitle}
          text={i18n.string(keys.paymentMethodComponent.deletePayment)}
        />
      </View>
    </View>
  );
};

export default SavedPayment;


import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { CommerceTypes } from '@brandingbrand/fscommerce';

import { i18n, keys } from '@assos/lib';
import { assetsImages, fontFamily, lightMode as palette } from '@assos/styles';

import OptionPicker from './OptionPicker';
import CTAButton, { CTAButtonTypes } from './CTAButton';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  deliveryTitleContainer: {
    paddingHorizontal: 18
  },
  deliveryMethodContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10
  },
  textTitle: {
    fontFamily,
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 22,
    letterSpacing: 0.5,
    color: palette.textPrimary
  },
  textInfo: {
    fontFamily,
    fontSize: 14,
    letterSpacing: 0.5,
    lineHeight: 20,
    color: palette.textSecondary
  },
  deliveryMethodPrice: {
    fontFamily,
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 22,
    letterSpacing: 0.5,
    color: palette.textPrimary
  },
  titleModalContainer: {
    paddingVertical: 20,
    paddingHorizontal: 18,
    alignItems: 'center'
  },
  titleContainer: {
    paddingVertical: 20,
    paddingHorizontal: 18
  },
  sectionModalTitle: {
    fontFamily,
    fontWeight: '500',
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 29,
    letterSpacing: 1,
    color: palette.textPrimary
  },
  sectionTitle: {
    fontFamily,
    fontWeight: '600',
    fontSize: 25,
    lineHeight: 29,
    letterSpacing: 0.5,
    color: palette.textPrimary
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 18,
    paddingVertical: 40
  },
  close: {
    position: 'absolute',
    top: 26,
    right: 21.5
  }
});

// TODO: This is mock data. Will be removed.
export interface CheckoutDeliveryOption {
  name: string;
  duration: string;
  estimatedDelivery: string;
  price: string;
}
// TODO: This is mock data. Will be removed.
const options: CheckoutDeliveryOption[] = [
  {
    name: 'Standard Shipping',
    duration: '3-5 Business Days',
    estimatedDelivery: 'Day, Month XX',
    price: '$7.99'
  },
  {
    name: 'Rush Shipping',
    duration: '2-4 Business Days',
    estimatedDelivery: 'Day, Month XX',
    price: '$9.99'
  },
  {
    name: 'Next Day Shipping',
    duration: '1 Business Day',
    estimatedDelivery: 'Day, Month XX',
    price: '$27.99'
  }
];

interface EditDeliveryMethodComponentProps {
  methods?: CommerceTypes.ShippingMethodResponse;
  onCheckOption?: (val: CommerceTypes.ShippingMethod) => void;
  selectedOption?: (val: CommerceTypes.ShippingMethod) => void;
  onDismiss?: () => void;
  isModal?: boolean;
  isSection?: boolean;
}

export const DeliveryMethod: FC<EditDeliveryMethodComponentProps> = props => {
  const [selectedDeliveryOption, setSelectedDeliveryOption] =
    useState<CommerceTypes.ShippingMethod | undefined>();

  useEffect(() => {
    const { methods } = props;
    if (!!methods && !!methods.shippingMethods.length) {
      const defaultMethod = !!methods.defaultMethodId
        ? methods.shippingMethods.find(method => method.id === methods.defaultMethodId)
        : methods.shippingMethods[0];
      setSelectedDeliveryOption(defaultMethod);
    }
  }, []);

  const selectDeliveryMethod = (option: CommerceTypes.ShippingMethod) => {
    setSelectedDeliveryOption(option);
    if (props.selectedOption) {
      props.selectedOption(option);
    }
  };

  const buttonPress = () => {
    const { onCheckOption } = props;
    if (onCheckOption && !!selectedDeliveryOption) {
      onCheckOption(selectedDeliveryOption);
    }
  };

  const onCloseModal = (): void => {
    const { onDismiss } = props;
    if (onDismiss) {
      onDismiss();
    }
  };

  const renderSectionTitle = (title: string) => {
    const containerStyle = props.isModal ? 'titleModalContainer' : 'titleContainer';
    const textStyle = props.isModal ? 'sectionModalTitle' : 'sectionTitle';
    return (
      <View style={styles[containerStyle]}>
        <Text style={styles[textStyle]}>
          {title}
        </Text>
      </View>
    );
  };

  const renderDeliveryMethodSection = (option: CheckoutDeliveryOption) => {
    return (
      <View style={styles.deliveryMethodContainer}>
        <View>
          <Text style={styles.textTitle}>
            {option.name}
          </Text>
          <Text style={styles.textInfo}>
            {option.duration}
          </Text>
          <Text style={styles.textInfo}>
            {`(${i18n.string(keys.checkout.getItBy)} ${option.estimatedDelivery})`}
          </Text>
        </View>
        <View>
          <Text style={styles.deliveryMethodPrice}>
            {option.price}
          </Text>
        </View>
      </View>
    );
  };

  const renderDeliveryMethod = (option: CommerceTypes.ShippingMethod) => {
    return (
      <View style={styles.deliveryMethodContainer}>
        <View style={{ flex: 4 }}>
          <Text style={styles.textTitle}>
            {option.name}
          </Text>
          <Text style={styles.textInfo}>
            {option.description}
          </Text>
          <Text style={styles.textInfo}>
            {`(${i18n.string(keys.checkout.getItBy)})`}
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <Text style={styles.deliveryMethodPrice}>
            {!!option.price && i18n.currency(option.price)}
          </Text>
        </View>
      </View>
    );
  };

  const renderPaymentButton = () => {
    return (
      <View style={styles.buttonContainer}>
        <CTAButton
          text={i18n.string(keys.checkout.done)}
          type={CTAButtonTypes.primary}
          handleOnPress={buttonPress}
        />
      </View>
    );
  };

  const renderDeliveryMethods = () => {
    return (
      <View>
        {renderSectionTitle(
          i18n.string(keys.checkout.deliveryMethod)
        )}
        <OptionPicker
          options={options}
          selected={options[0]}
          renderOptionContent={renderDeliveryMethodSection}
          // TODO: change after add API type for secure checkout ( selectDeliveryMethod )
        />
      </View>
    );
  };

  const renderModalDeliveryMethods = () => {
    const { isModal, methods } = props;
    return (
      <View style={{flex: 1}}>
        {isModal && renderSectionTitle(
          i18n.string(keys.deliveryOptionsComponent.headerTitle)
        )}
        {isModal && (
          <TouchableOpacity
            style={styles.close}
            onPress={onCloseModal}
            activeOpacity={0.7}
            hitSlop={{
              top: 10,
              right: 10,
              bottom: 10,
              left: 10
            }}
          >
            <Image source={assetsImages.close} />
          </TouchableOpacity>
        )}
        {!!methods && !!methods.shippingMethods.length && (
          <>
            <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
              <OptionPicker
                options={methods.shippingMethods}
                selected={selectedDeliveryOption}
                renderOptionContent={renderDeliveryMethod}
                onSelect={selectDeliveryMethod}
              />
            </ScrollView>
            {renderPaymentButton()}
          </>
        )}
      </View>
    );
  };

  return props.isSection
    ? renderDeliveryMethods()
    : renderModalDeliveryMethods();
};


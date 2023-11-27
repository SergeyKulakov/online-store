import React from 'react';
import { assetsImages, fonts } from '@assos/styles';
import { i18n, keys } from '@assos/lib';
import { Accordion } from '@brandingbrand/fscomponents';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  accordionText: {
    fontFamily: fonts.maisonNeue,
    fontSize: 14,
    marginLeft: 6,
    fontWeight: '600'
  },
  accordionStyle: {
    borderBottomColor: 'white'
  }
});

const PDPAccordion = ({ composition }: { composition: string }) => {
  return (
    <>
      <Accordion
        titleImage={assetsImages.composition}
        titleImageStyle={{ height: 36, resizeMode: 'contain' }}
        title={i18n.string(keys.pdp.composition)}
        titleUnderlayColor={'white'}
        titleTextStyle={styles.accordionText}
        style={styles.accordionStyle}
      >
        <Text style={{ marginVertical: 12, color: 'black' }}>
          {composition}
        </Text>
      </Accordion>

      <Accordion
        title={i18n.string(keys.pdp.warranty)}
        titleTextStyle={styles.accordionText}
        titleImage={assetsImages.warranty}
        titleImageStyle={{ height: 36, resizeMode: 'contain' }}
        style={styles.accordionStyle}
      >
        <Text>{i18n.string(keys.productDetails.accordions.warranty)}</Text>
      </Accordion>

      <Accordion
        title={i18n.string(keys.pdp.crash)}
        titleTextStyle={styles.accordionText}
        titleImage={assetsImages.crashPolicy}
        titleImageStyle={{ height: 36, resizeMode: 'contain' }}
        style={styles.accordionStyle}
      >
        <Text>{i18n.string(keys.productDetails.accordions.crash)}</Text>
      </Accordion>

      <Accordion
        title={i18n.string(keys.pdp.returns)}
        titleTextStyle={styles.accordionText}
        titleImage={assetsImages.returns}
        titleImageStyle={{ height: 36, resizeMode: 'contain' }}
        style={styles.accordionStyle}
      >
        <Text>{i18n.string(keys.productDetails.accordions.returns)}</Text>
      </Accordion>

      <Accordion
        title={i18n.string(keys.pdp.payments)}
        titleTextStyle={styles.accordionText}
        titleImage={assetsImages.securePayments}
        titleImageStyle={{ height: 36, resizeMode: 'contain' }}
        style={styles.accordionStyle}
      >
        <Text>{i18n.string(keys.productDetails.accordions.payments)}</Text>
      </Accordion>
    </>
  );
};

export default PDPAccordion;

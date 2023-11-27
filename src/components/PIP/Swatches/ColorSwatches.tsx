import {ProductControllersTypes} from '@assos/datasources/magento/Products';
import {env} from '@brandingbrand/fsapp';
import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './ColorSwatches.styles';


export interface ColorSwatchesProps {
  swatches: ProductControllersTypes.ColorDetails[];
  maxLength?: number;
  onSwatchPress: (swatch: ProductControllersTypes.ColorDetails) => () => void;
}

export interface SwatchProps {
  swatch: ProductControllersTypes.ColorDetails;
  idx: number;
  onPress: () => void;
}


const Swatch: FC<SwatchProps> = ({swatch, idx, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    {swatch.image ?
      (
        <Image
          source={{uri: env.magento.mediaBaseURL + swatch.image}}
          style={styles.swatch}
        />
      )
      :
      (
        <View
          key={swatch.key}
          style={[
            styles.swatch,
            {
              backgroundColor: swatch.swatch.value,
              borderWidth: idx === 0 ? 1 : 0
            }
          ]}
        />
      )}
  </TouchableOpacity>
);


const ColorSwatches: FC<ColorSwatchesProps> = ({swatches, maxLength, onSwatchPress}) => {

  const swatchesLength = maxLength ?? 3;

  return (
    <View style={styles.container}>
      {swatches?.slice(0, swatchesLength).map((swatch, idx) =>
        <Swatch key={idx} swatch={swatch} idx={idx} onPress={onSwatchPress(swatch)}/>
      )}
      {swatches?.length > swatchesLength ? (
        <Text style={styles.plus}>{`+ ${swatches.length - swatchesLength}`}</Text>
      ) : null }
    </View>
  );
};


export default ColorSwatches;

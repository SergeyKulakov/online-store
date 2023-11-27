import React, {FC} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {assetsImages} from '@assos/styles';
import styles from './Favorite.styles';


interface FavoriteProps {
  onPress: () => void;
  favorited: boolean;
}

const Favorite: FC<FavoriteProps> = props => {
  return (
      <TouchableOpacity
          onPress={props.onPress}
          style={styles.container}
      >
        {
          props.favorited ?
          (
            <Image
              source={assetsImages.favoriteBlack}
              style={styles.star}
            />
          ) :
          (
            <Image
              source={assetsImages.favorite}
              style={styles.star}
            />
          )
        }
      </TouchableOpacity>
  );
};

export default Favorite;

import {
  FlatList,
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import React, { useState } from 'react';
import { i18n, keys, requestLocationPermission } from '@assos/lib';
import { assetsImages, fonts, icons } from '@assos/styles';
import IconButton from '@assos/components/ui/IconButton';
import { google } from '@assos/datasources/google/controller';
import Geolocation from 'react-native-geolocation-service';
import { NoResults } from './NoResults';


// TODO export styles, type props
const ChangeLocation = ({
  handleChangeLocation,
  changeLocation,
  setLocationCoords
}: any) => {
  const [placesResults, setPlacesResults] =
    useState<{ description: string; place_id: string; reference: string }[]>([]);
  const [touched, setTouched] = useState(false);

  const handleClose = () => {
    if (touched) {
      setTouched(false);
    }
    handleChangeLocation();
  };

  const handleSubmitSearch = (query: string) => {
    google.suggestPlaces(query).then(results => {
      if (!touched) {
        setTouched(true);
      }
      setPlacesResults(results);
    }).catch();
  };

  // TODO refactor to make it actually set to current location
  const handleCurrentLocation = async () => {
    const isLocation = await requestLocationPermission();

    if (!isLocation) {
      return;
    }
    Geolocation.getCurrentPosition(({coords}) => {
      setLocationCoords(`${coords.latitude},${coords.longitude}`);
    });
    setPlacesResults([]);
    handleClose();
  };

  return (
    <Modal
      visible={changeLocation}
      presentationStyle='formSheet'
      onDismiss={handleClose}
      onRequestClose={handleClose}
      animationType='slide'
    >
      <TouchableWithoutFeedback onPressOut={handleClose}>
        <>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 18,
              paddingHorizontal: 6,
              borderBottomColor: '#DFDFDF',
              borderBottomWidth: 1
            }}
          >
            <Text
              style={{
                flex: 1,
                textAlign: 'center',
                fontFamily: fonts.orbitron,
                fontWeight: '500'
              }}
            >
              {i18n.string(keys.weatherRecommendations.changeLocation.header)}
            </Text>
            <IconButton
              image={assetsImages.close}
              style={{ position: 'absolute', right: 12 }}
              // tslint:disable-next-line: jsx-no-lambda
              onPress={() => {
                setPlacesResults([]);
                handleClose();
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 18,
              marginTop: 12,
              borderBottomWidth: 1,
              borderBottomColor: '#A3A3A3'
            }}
          >
            <Image
              source={icons.GraySearchIcon}
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain'
              }}
            />
            <TextInput
              style={{
                flex: 1,
                fontSize: 17,
                paddingVertical: 12,
                paddingHorizontal: 12,
                fontWeight: '600',
                fontFamily: fonts.maisonNeue
              }}
              placeholder={i18n.string(
                keys.weatherRecommendations.changeLocation.inputPlaceHolder
              )}
              returnKeyLabel='done'
              returnKeyType='done'
              onChangeText={handleSubmitSearch}
            />
            <TouchableOpacity onPress={handleCurrentLocation}>
              <Image
                source={icons.CurrentLocationIcon}
                style={{
                  height: 20,
                  width: 20,
                  resizeMode: 'contain'
                }}
              />
            </TouchableOpacity>
          </View>
          <ScrollView>
            {touched && !placesResults.length ? (
              <NoResults />
            ) : (
              <FlatList
                data={placesResults}
                // tslint:disable-next-line: jsx-no-lambda
                keyExtractor={(place: {
                  reference: string;
                  description: string;
                  place_id: string;
                }) => place.reference}
                // tslint:disable-next-line: jsx-no-lambda
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      marginHorizontal: 20,
                      marginVertical: 6,
                      alignItems: 'center',
                      borderBottomColor: '#DBDBDB',
                      borderBottomWidth: 1
                    }}
                    onPress={() => {
                      google
                        .placeDetails(item.place_id)
                        .then(res => {
                          setLocationCoords(res);
                          setPlacesResults([]);
                          handleClose();
                        })
                        .catch();
                    }}
                  >
                    <Image
                      source={icons.contextualWeatherBg}
                      style={{
                        height: 18,
                        width: 18,
                        resizeMode: 'contain',
                        marginRight: 12
                      }}
                    />
                    <Text
                      style={{
                        fontWeight: '700',
                        fontSize: 17,
                        lineHeight: 16,
                        letterSpacing: 0.5,
                        paddingVertical: 18
                      }}
                    >
                      {item.description}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            )}
          </ScrollView>
        </>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ChangeLocation;

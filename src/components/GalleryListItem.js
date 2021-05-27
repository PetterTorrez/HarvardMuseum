import React, { useRef } from 'react';
import {
  ActivityIndicator,
  Animated,
  Vibration,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FavoriteButton from './FavoriteButton';
import { updateFavoriteStatus } from '../actions/favorite';

const VIBRATION_DURATION = 20;
const screenText = {
  date: 'Date :',
  technique: 'Technique :',
  noDate: '(No date)',
};
const GalleryListItem = ({ data, action }) => {
  const { favorites } = useSelector((state) => state.favorite);
  const dispatch = useDispatch();
  const favoriteAnimation = useRef(new Animated.Value(1)).current;
  const isFavorite = favorites.some((item) => item.id === data.id);

  const heartAnimation = () => {
    Animated.sequence([
      Animated.timing(favoriteAnimation, { toValue: 1, duration: 50, useNativeDriver: true }),
      Animated.timing(favoriteAnimation, { toValue: 1.2, duration: 75, useNativeDriver: true }),
      Animated.timing(favoriteAnimation, { toValue: 0.8, duration: 75, useNativeDriver: true }),
      Animated.timing(favoriteAnimation, { toValue: 1, duration: 50, useNativeDriver: true }),
    ]).start();
  };

  const updateStatus = () => {
    heartAnimation();
    dispatch(updateFavoriteStatus(data));
    Vibration.vibrate(VIBRATION_DURATION, true);
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.header}>
        <View>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>
              {screenText.technique}
            </Text>

            <Text style={styles.value}>
              {data.technique}
            </Text>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.label}>
              {screenText.date}
            </Text>

            <Text style={styles.value}>
              {data.date || screenText.noDate}
            </Text>
          </View>
        </View>

        <TouchableWithoutFeedback
          onPress={updateStatus}
          style={styles.imageContainer}>
          <View>
            <Animated.View style={{
              transform: [
                { scale: favoriteAnimation },
              ],
            }}>
              <FavoriteButton isFavorite={isFavorite} />
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <TouchableWithoutFeedback
        onPress={() => action({ visibility: true, gallery: data })}
        style={styles.imageContainer}
      >
        <View>
          <View style={styles.loading}>
            <ActivityIndicator size={'large'} color={'#444'} />
          </View>

          <Image
            source={{ uri: data.baseimageurl }}
            style={styles.image}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('2%'),
  },

  image: {
    height: hp('53%'),
    marginTop: wp('3%'),
    resizeMode: 'contain',
  },

  imageContainer: {
    alignItems: 'flex-end',
  },

  itemContainer: {
    backgroundColor: 'white',
    flex: 1,
    minHeight: hp('60%'),
    paddingHorizontal: wp('5%'),
  },

  label: {
    color: '#111',
    fontWeight: 'bold',
    fontSize: 15,
    marginRight: wp('5%'),
  },

  loading: {
    position: 'absolute',
    top: hp('33%'),
    left: wp('45%'),
  },

  value: {
    color: '#828275',
    fontWeight: 'bold',
    fontSize: 12,
  },

  rowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default GalleryListItem;

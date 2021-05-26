import React from 'react';
import {
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

const screenText = {
  date: 'Date',
  technique: 'Technique',
  noDate: '(No date)',
};

function GalleryListItem({ data, action }) {
  const { favorites } = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  const isFavorite = favorites.some((item) => item.id === data.id);

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
          onPress={() => dispatch(updateFavoriteStatus(data))}
          style={styles.imageContainer}>
          <View>
            <FavoriteButton isFavorite={isFavorite} />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <TouchableWithoutFeedback
        onPress={() => action({ visibility: true, gallery: data })}
        style={styles.imageContainer}
      >
        <Image source={{ uri: data.baseimageurl }} style={styles.image} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    backgroundColor: '#000',
    flex: 1,
    marginTop: wp('3%'),
    resizeMode: 'contain',
  },

  imageContainer: {
    backgroundColor: 'red',
    flex: 1,
  },

  itemContainer: {
    backgroundColor: 'white',
    borderBottomWidth: hp('3%'),
    borderBottomColor: '#ddd',
    flex: 1,
    height: hp('60%'),
    paddingVertical: hp('3%'),
    paddingHorizontal: wp('5%'),
  },

  label: {
    color: '#111',
    fontWeight: '600',
    fontSize: 15,
    marginRight: wp('5%'),
  },

  value: {
    color: '#828275',
    fontWeight: '200',
    fontSize: 12,
  },

  rowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default GalleryListItem;

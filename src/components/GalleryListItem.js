import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const screenText = {
  date: 'Date',
  technique: 'Technique',
  noDate: '(No date)',
};

const GalleryListItem = ({ data }) => {
  return (
    <View style={styles.containerItem}>
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

      <Image source={{ uri: data.baseimageurl }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: 'white',
    borderBottomWidth: hp('3%'),
    borderBottomColor: '#ddd',
    flex: 1,
    height: hp('60%'),
    paddingVertical: hp('3%'),
    paddingHorizontal: wp('5%'),
  },

  image: {
    backgroundColor: '#000',
    flex: 1,
    marginTop: wp('3%'),
    resizeMode: 'contain',
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

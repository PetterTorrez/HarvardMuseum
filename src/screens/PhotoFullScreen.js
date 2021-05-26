import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { hidePhoto } from '../actions/photoFullScreen';
import leftArrow from '../../assets/left-arrow.png';

const PhotoFullScreen = () => {
  const { isShowingPhoto, gallery } = useSelector((state) => state.photoFullScreen);
  const dispatch = useDispatch();
  const hidephoto = (visibility) => dispatch(hidePhoto(visibility));

  if (!isShowingPhoto) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: gallery.baseimageurl }} style={styles.image} />

      <TouchableWithoutFeedback
        onPress={() => hidephoto(false)}
        style={styles.imageContainer}
      >
        <Image source={leftArrow} style={styles.leftArrow} tintColor={'white'} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#000000',
    justifyContent: 'center',
    opacity: 0.95,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  image: {
    flex: 1,
    paddingVertical: hp('10%'),
    resizeMode: 'contain',
    width: wp('100%'),
  },

  leftArrow: {
    height: hp('4%'),
    position: 'absolute',
    left: wp('3%'),
    right: 0,
    top: hp('2%'),
    bottom: 0,
    resizeMode: 'contain',
    width: wp('8%'),
  },
});

export default PhotoFullScreen;

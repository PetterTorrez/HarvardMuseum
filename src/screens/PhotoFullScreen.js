import React from 'react';
import { useBackHandler } from '@react-native-community/hooks';
import {
  Alert,
  BackHandler,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { hidePhoto } from '../actions/photoFullScreen';
import leftArrow from '../../assets/left-arrow.png';

const screenText = {
  alert: {
    message: 'Are you sure you want to exit the Harvard Museum App?',
    negativeOptionLabel: 'Cancel',
    positiveOptionLabel: 'OK',
    title: 'Hold on!',
  },
};

const PhotoFullScreen = () => {
  const { isShowingPhoto, gallery } = useSelector((state) => state.photoFullScreen);
  const dispatch = useDispatch();
  const hidePhotoHandler = (visibility) => dispatch(hidePhoto(visibility));

  useBackHandler(() => {
    if (isShowingPhoto) {
      hidePhotoHandler(false);
      return true;
    }

    Alert.alert(
      screenText.alert.title,
      screenText.alert.message,
      [
        {
          text: screenText.alert.negativeOptionLabel,
          onPress: () => null,
        },
        {
          text: screenText.alert.positiveOptionLabel,
          onPress: () => BackHandler.exitApp(),
        },
      ],
    );

    return true;
  });

  if (!isShowingPhoto) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: gallery.baseimageurl }} style={styles.image} />

      <TouchableWithoutFeedback
        onPress={() => hidePhotoHandler(false)}
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
    backgroundColor: 'black',
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

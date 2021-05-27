import React, { useRef, useState, useEffect } from 'react';
import {
  ActivityIndicator,
  Animated,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useSelector, useDispatch } from 'react-redux';
import GalleryListItem from '../components/GalleryListItem';
import { showPhoto } from '../actions/photoFullScreen';
import { clearGalleries, getGallery, setGalleries } from '../actions/gallery';

const indicatorSize = hp('6%');
const screenText = {
  gettingMore: 'Getting more galleries',
};

const GalleryScreen = () => {
  const dispatch = useDispatch();
  const setPhotoVisibility = (data) => dispatch(showPhoto(data));
  const { galleryData } = useSelector((state) => state.gallery);
  const [isRefreshing, changeRefreshingStatus] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [isCalling, setIsCalling] = useState(false);
  const [callFlag, changeCallFlag] = useState(false);
  useEffect(() => handlerGetGallery(), [pageNumber, callFlag]);

  const animation = useRef(new Animated.Value(0)).current;
  Animated.timing(animation, {
    toValue: isCalling ? 1 : 0,
    duration: 100,
    useNativeDriver: true,
  }).start();

  const handlerGetGallery = async () => {
    const response = await getGallery(pageNumber)();
    dispatch(setGalleries(response));
    setIsCalling(false);
    changeRefreshingStatus(false);
  };

  const keyExtractor = (item, index) => item.id + String(index);

  const handleMoreGalleries = () => {
    if (!isCalling && galleryData.length > 0) {
      setIsCalling(true);
      setPageNumber((prevState) => prevState + 1);
    }
  };

  const loadingIndicator = () => galleryData.length > 0 && (
    <View style={styles.backgroundIndicator}>
      <Animated.View style={{
        transform: [
          {
            translateY: animation.interpolate({
              inputRange: [0.01, 1],
              outputRange: [0, -1 * indicatorSize],
              extrapolate: 'clamp',
            }),
          },
        ],
      }}>
        <View style={styles.indicatorContainer}>
          <ActivityIndicator color="#444" />

          <Text style={styles.indicatorLabel}>
            {screenText.gettingMore}
          </Text>
        </View>
      </Animated.View>
    </View>
  );

  const refreshData = () => {
    if (pageNumber === 0) {
      changeCallFlag((prevState) => !prevState);
    }

    dispatch(clearGalleries());
    changeRefreshingStatus(true);
    setIsCalling(true);
    setPageNumber(0);
  };

  const itemSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
      data={galleryData}
      keyExtractor={keyExtractor}
      onEndReached={handleMoreGalleries}
      onEndReachedThreshold={1}
      onRefresh={refreshData}
      ItemSeparatorComponent={itemSeparator}
      ListFooterComponent={loadingIndicator}
      refreshing={isRefreshing}
      renderItem={({ item }) => <GalleryListItem data={item} action={setPhotoVisibility} />}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  backgroundIndicator: {
    backgroundColor: 'white',
    height: indicatorSize,
    paddingTop: indicatorSize,
  },

  container: {
    backgroundColor: '#ddd',
    flexGrow: 1,
  },

  indicatorContainer: {
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingTop: hp('1%'),
    paddingBottom: hp('2%'),
    height: indicatorSize,
  },

  indicatorLabel: {
    color: '#444',
    fontWeight: '600',
    marginLeft: wp('5%'),
  },

  separator: {
    borderBottomWidth: hp('2%'),
    borderBottomColor: '#ddd',
  },
});

export default GalleryScreen;

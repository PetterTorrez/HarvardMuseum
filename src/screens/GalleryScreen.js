import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
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

const GalleryScreen = () => {
  const dispatch = useDispatch();
  const setPhotoVisibility = (data) => dispatch(showPhoto(data));
  const { galleryData } = useSelector((state) => state.gallery);
  const [isRefreshing, changeRefreshingStatus] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [isCalling, setIsCalling] = useState(false);
  const [callFlag, changeCallFlag] = useState(false);
  useEffect(() => handlerGetGallery(), [pageNumber, callFlag]);

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
    <View style={styles.indicatorContainer}>
      <ActivityIndicator color="#444" />

      <Text style={styles.indicatorLabel}>
        {'Getting more galleries'}
      </Text>
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
  container: {
    backgroundColor: '#ddd',
    flexGrow: 1,
  },

  indicatorContainer: {
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingBottom: hp('2%'),
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

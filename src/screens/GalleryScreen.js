import React, { useState, useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import GalleryListItem from '../components/GalleryListItem';
import { showPhoto } from '../actions/photoFullScreen';
import { clearGalleries, getGallery, setGalleries } from '../actions/gallery';

const GalleryScreen = () => {
  const { galleryData } = useSelector((state) => state.gallery);
  const dispatch = useDispatch();
  const setPhotoVisibility = (data) => dispatch(showPhoto(data));

  const [isRefreshing, changeRefreshingStatus] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [isCalling, setIsCalling] = useState(false);
  const [callFlag, changeCallFlag] = useState(false);

  useEffect(() => handlerGetCallery(), [pageNumber, callFlag]);

  const handlerGetCallery = async () => {
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

  const refreshData = () => {
    if (pageNumber === 0) {
      changeCallFlag((prevState) => !prevState);
    }

    dispatch(clearGalleries());
    changeRefreshingStatus(true);
    setIsCalling(true);
    setPageNumber(0);
  };

  return (
    <FlatList
      data={galleryData}
      keyExtractor={keyExtractor}
      onEndReached={handleMoreGalleries}
      onEndReachedThreshold={3}
      onRefresh={refreshData}
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
});

export default GalleryScreen;

import React, { useState, useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
} from 'react-native';
import GalleryItem from '../components/GalleryItem';
import { getGallery } from '../redux/galleryRedux';

const GalleryScreen = () => {
  const [isRefreshing, changeRefreshingStatus] = useState(false);
  const [galleries, setGalleries] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [isCalling, setIsCalling] = useState(false);
  const [callFlag, changeCallFlag] = useState(false);

  useEffect(() => handlerGetCallery(), [pageNumber, callFlag]);

  const handlerGetCallery = async () => {
    const response = await getGallery(pageNumber)();
    setGalleries((prevState) => (isRefreshing ? response : prevState.concat(response)));

    setIsCalling(false);
    changeRefreshingStatus(false);
  };

  const keyExtractor = (item, index) => item.id + String(index);

  const handleMoreGalleries = () => {
    if (!isCalling && galleries.length > 0) {
      setIsCalling(true);
      setPageNumber((prevState) => prevState + 1);
    }
  };

  const refreshData = () => {
    if (pageNumber === 0) {
      changeCallFlag((prevState) => !prevState);
    }

    setGalleries([]);
    changeRefreshingStatus(true);
    setIsCalling(true);
    setPageNumber(0);
  };

  return (
    <FlatList
      data={galleries}
      keyExtractor={keyExtractor}
      onEndReached={handleMoreGalleries}
      onEndReachedThreshold={1}
      onRefresh={refreshData}
      refreshing={isRefreshing}
      renderItem={({ item }) => <GalleryItem data={item} />}
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

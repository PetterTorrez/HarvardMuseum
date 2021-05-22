import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getTest } from '../redux/galleryRedux';

const GalleryItem = ({ data }) => {
  return (
    <View style={styles.containerItem}>
      <Text style={{ color: '#f0f' }}>
         {data.copyright}
       </Text>
     </View>
    );
};

const styles = StyleSheet.create({
  containerItem: {
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flex: 1,
    justifyContent: 'center',
    height: 150,
  },
});

export default GalleryItem;

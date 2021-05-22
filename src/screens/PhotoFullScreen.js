import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PhotoFullScreen = () => {
  // luego veo como validar
  if (true) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text>
        {'Photo Full Screen'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#000000',
    justifyContent: 'center',
    opacity: 0.8,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default PhotoFullScreen;

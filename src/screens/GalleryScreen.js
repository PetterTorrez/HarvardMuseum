import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class GalleryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          {'Gallery Screen'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ddd',
    flex: 1,
    justifyContent: 'center',
  },
});

export default GalleryScreen;

import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class PhotoFullScreen extends PureComponent {
  render() {
    if (!this.props.isShowingPhoto) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text>
          {'Photo Full Screen'}
        </Text>
      </View>
    );
  }
}

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

function mapStateToProps({ photoFullScreen }) {
  const { isShowingPhoto } = photoFullScreen;

  return { isShowingPhoto };
}

export default connect(mapStateToProps)(PhotoFullScreen);

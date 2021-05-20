import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { dummyAction } from './actions/dummy';

class AppRouter extends Component {
  constructor(props) {
    super(props);

    props.dummyAction();
  }

  render() {
    return (
      <View>
        <Text>
          {'React Native'}
        </Text>
      </View>
    );
  }
}

function mapStateToProps({ dummy }) {
  const { dummyData } = dummy;

  return { dummyData };
}

export default connect(mapStateToProps, {
  dummyAction,
})(AppRouter);

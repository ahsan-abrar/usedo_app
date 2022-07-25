import React from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import Routes from '../../Navigation/Routes';

export default function DetailScreen(props) {
  const {navigation} = props;

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(Routes.HOME)}>
        <Text>DetailScreen</Text>
      </TouchableOpacity>
    </View>
  );
}

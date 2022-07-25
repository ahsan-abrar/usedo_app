import React from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import Routes from '../../Navigation/Routes';

export default function HomeScreen(props) {
  const {navigation} = props;

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(Routes.DETAIL)}>
        <Text style={{marginTop: 100}}>HomeScreen</Text>
      </TouchableOpacity>
    </View>
  );
}

import React from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import Routes from '../../navigation/Routes';

export default function DetailScreen(props) {
  const {navigation, route} = props;

  const detailData = route?.params?.detailData;

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <TouchableOpacity onPress={() => navigation.navigate(Routes.HOME)}>
        <Text>{detailData?.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

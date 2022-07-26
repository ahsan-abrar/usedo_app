import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Routes from '../../navigation/Routes';

import styles from './styles';

let dummyImage =
  'https://a0.muscache.com/im/pictures/d24bb679-2598-48b8-9c21-ac786c2853bd.jpg?im_w=1200';

export default function ListItem({data}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.wrap}
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate(Routes.DETAIL, {
          detailData: data,
        })
      }>
      <Image
        style={styles.img}
        source={{
          uri: dummyImage,
        }}
      />
      <View style={styles.contentWrap}>
        <Text style={[styles.text, styles.mb]}>{data?.title}</Text>
        <Text style={styles.text}>{data?.desc}</Text>
      </View>
    </TouchableOpacity>
  );
}

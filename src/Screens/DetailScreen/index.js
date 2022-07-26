import React from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import Routes from '../../navigation/Routes';
import styles from './styles';

let dummyImage =
  'https://a0.muscache.com/im/pictures/d24bb679-2598-48b8-9c21-ac786c2853bd.jpg?im_w=1200';

export default function DetailScreen(props) {
  const {navigation, route} = props;

  const detailData = route?.params?.detailData;

  return (
    <View style={styles.container}>
      <View style={styles.imgWrap}>
        <Image style={styles.img} source={{uri: dummyImage}} />
        <View style={styles.overly} />
      </View>

      <View style={styles.wrap}>
        <Text style={styles.title}>{detailData?.title}</Text>
        <Text style={styles.desc}>{detailData?.desc}</Text>
      </View>
    </View>
  );
}

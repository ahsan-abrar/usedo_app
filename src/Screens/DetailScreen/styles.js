import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imgWrap: {
    height: 280,
    width: windowWidth,
  },
  img: {
    height: '100%',
    width: '100%',
  },
  overly: {
    backgroundColor: '#00000017',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  wrap: {
    padding: 12,
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
  },
  desc: {
    marginTop: 10,
    color: '#000',
    fontSize: 15,
    fontWeight: '500',
  },
});

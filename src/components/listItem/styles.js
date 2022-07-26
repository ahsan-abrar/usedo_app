import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  desc: {
    color: '#000',
    fontSize: 12,
    lineHeight: 17,
  },
  img: {
    width: 110,
    height: 110,
    borderRadius: 10,
    marginRight: 10,
  },
  wrap: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    margin: 10,
    borderRadius: 12,
    overflow: 'hidden',
    // shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  contentWrap: {
    flex: 1,
    justifyContent: 'center',
  },
  mb: {
    marginBottom: 10,
  },
});

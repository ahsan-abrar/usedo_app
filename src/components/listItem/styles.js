import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  text: {
    color: '#000',
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 6,
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
});

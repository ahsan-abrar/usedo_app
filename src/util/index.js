import Snackbar from 'react-native-snackbar';

export const bottomSheet = msg => {
  Snackbar.show({
    text: msg,
    duration: Snackbar.LENGTH_SHORT,
  });
};

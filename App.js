/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import configureStore from './src/store';
import SplashScreen from 'react-native-splash-screen';

const store = configureStore();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

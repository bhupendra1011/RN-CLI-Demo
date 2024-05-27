/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView} from 'react-native';

import {WebView} from 'react-native-webview';

function App(): React.JSX.Element {
  const DEPLOYED_APP_URL = 'https://conferencing.agora.io/';
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView style={{flex: 1}} source={{uri: DEPLOYED_APP_URL}} />;
    </SafeAreaView>
  );
}

export default App;

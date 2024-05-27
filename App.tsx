/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, useWindowDimensions} from 'react-native';
import {WebView} from 'react-native-webview';

function App(): React.JSX.Element {
  const {height, width} = useWindowDimensions();
  const DEPLOYED_APP_URL = 'https://conferencing.agora.io';

  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
        source={{uri: DEPLOYED_APP_URL}}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          height: height,
          width: width,
        }}
      />
    </SafeAreaView>
  );
}

export default App;

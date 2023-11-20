import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="paragraphLarge" style={{color: 'red'}}>
        NubbleApp
      </Text>

      <Text preset="paragraphLarge" style={{fontFamily: 'Satoshi-Italic'}}>
        NubbleApp
      </Text>

      <Text style={{color: 'green'}}>NubbleApp</Text>
    </SafeAreaView>
  );
}

export default App;

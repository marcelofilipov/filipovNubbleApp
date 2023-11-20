import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="paragraphLarge" style={{color: 'red'}}>
        NubbleApp
      </Text>

      <Text preset="paragraphSmall" style={{color: 'blue'}}>
        NubbleApp
      </Text>

      <Text style={{color: 'green'}}>NubbleApp</Text>
    </SafeAreaView>
  );
}

export default App;

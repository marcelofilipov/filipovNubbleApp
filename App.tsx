import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text italic preset="headingMedium">
        NubbleApp
      </Text>

      <Text preset="paragraphLarge">NubbleApp</Text>

      <Text>NubbleApp</Text>
    </SafeAreaView>
  );
}

export default App;

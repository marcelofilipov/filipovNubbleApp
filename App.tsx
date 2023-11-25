import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {theme} from './src/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text italic preset="headingMedium">
            NubbleApp
          </Text>

          <Button title="Primary" marginBottom="s12" />
          <Button loading preset="outline" title="Outline" marginBottom="s12" />

          <Button loading title="Loading" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;

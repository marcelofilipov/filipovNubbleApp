import React from 'react';
import {SafeAreaView, TextInput, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {Text} from './src/components/Text/Text';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';
import {Button} from './src/components/Button/Button';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text mb="s8" preset="headingLarge">
            Olá
          </Text>
          <Text mb="s40" preset="paragraphLarge">
            Digite seu e-mail e senha para entrar
          </Text>
          <Box mb="s20">
            <TextInput
              placeholder="Digite seu e-mail"
              style={{borderWidth: 1, height: 50}}
            />
          </Box>
          <Box>
            <TextInput
              placeholder="Digite sua senha"
              style={{borderWidth: 1, height: 50}}
            />
          </Box>

          <Text color="primary" preset="paragraphSmall" bold mt="s10">
            Esqueci minha senha
          </Text>

          <Button mt="s48" title="Entrar" />
          <Button preset="outline" mt="s12" title="Criar uma conta" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;

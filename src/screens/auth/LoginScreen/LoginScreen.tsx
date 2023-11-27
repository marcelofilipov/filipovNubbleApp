import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button} from '../../../components/Button/Button';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Icon} from '../../../components/Icon/Icon';
import {Screen} from '../../../components/Screen/Screen';

export function LoginScreen() {
  return (
    <Screen>
      <View style={{paddingHorizontal: 24}}>
        <Text mb="s8" preset="headingLarge">
          Olá
        </Text>
        <Text mb="s40" preset="paragraphLarge">
          Digite seu e-mail e senha para entrar
        </Text>

        <TextInput
          errorMessage="Mensagem de erro"
          label="E-mail"
          placeholder="Digite seu e-mail"
          boxProps={{mb: 's20'}}
        />

        <TextInput
          label="Senha"
          placeholder="Digite sua senha"
          RightComponent={<Icon color="gray2" name="eyeOn" />}
          boxProps={{mb: 's10'}}
        />

        <Text color="primary" preset="paragraphSmall" bold>
          Esqueci minha senha
        </Text>

        <Button mt="s48" title="Entrar" />
        <Button preset="outline" mt="s12" title="Criar uma conta" />
      </View>
    </Screen>
  );
}

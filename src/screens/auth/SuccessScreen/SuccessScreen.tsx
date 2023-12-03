import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Icon} from '../../../components/Icon/Icon';
import {Button} from '../../../components/Button/Button';
import {Text} from '../../../components/Text/Text';

export function SuccessScreen() {
  function goBackToBegin() {
    // TODO: navegar para a tela de login
  }

  return (
    <Screen>
      <Icon name="bellOn" />
      <Text preset="headingLarge" mt="s24">
        Title
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        description
      </Text>
      <Button onPress={goBackToBegin} title="Voltar ao início" mt="s40" />
    </Screen>
  );
}

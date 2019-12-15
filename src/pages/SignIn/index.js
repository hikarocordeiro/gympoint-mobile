import React, { useRef } from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import { Container, Form, Input, SubmitButton } from './styles';

export default function SignIn() {
  function handleSubmit() {}
  const idRef = useRef();

  return (
    <Container>
      <Image source={logo} />
      <Form>
        <Input
          keyboardType="numeric"
          autoCorrect={false}
          placeholder="Informe seu ID de cadastro"
          ref={idRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />
        <SubmitButton onPress={handleSubmit}>Entrar no sistema</SubmitButton>
      </Form>
    </Container>
  );
}

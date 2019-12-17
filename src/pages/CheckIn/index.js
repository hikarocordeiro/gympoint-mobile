import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';

import { Container, SubmitButton, CheckInList } from './styles';

export default function CheckIn() {
  return (
    <>
      <Header />
      <Container>
        <SubmitButton onPress={() => {}}>Novo check-in</SubmitButton>

        <CheckInList />
      </Container>
    </>
  );
}

CheckIn.navigationOptions = {
  tabBarLabel: 'Check-ins',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="edit-location" size={20} color={tintColor} />
  ),
};

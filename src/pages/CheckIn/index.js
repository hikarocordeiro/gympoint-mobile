import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import Header from '~/components/Header';
import Checkin from '~/components/Checkin';

import { Container, SubmitButton, List } from './styles';

const data = [1, 2, 3, 4, 5];

export default function CheckIn() {
  return (
    <>
      <Header />
      <Container>
        <SubmitButton onPress={() => {}}>Novo check-in</SubmitButton>

        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Checkin data={item} />}
        />
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

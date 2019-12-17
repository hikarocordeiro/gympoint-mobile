import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import Header from '~/components/Header';
import Checkin from '~/components/Checkin';

import { Container, SubmitButton, List } from './styles';

export default function CheckIn() {
  const { id } = useSelector(state => state.auth.student);

  const [checkins, setCheckins] = useState([]);

  useEffect(() => {
    async function loadChekins() {
      const response = await api.get(`/students/${id}/checkins`);

      setCheckins(response.data);
    }
    loadChekins();
  }, [id]);

  return (
    <>
      <Header />
      <Container>
        <SubmitButton onPress={() => {}}>Novo check-in</SubmitButton>

        <List
          data={checkins}
          keyExtractor={item => String(item.id)}
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

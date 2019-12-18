import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';

import { Container } from './styles';

export default function Add() {
  return (
    <>
      <Container>
        <Header />
      </Container>
    </>
  );
}

Add.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('List');
      }}
    >
      <Icon name="chevron-left" size={24} color="#444" />
    </TouchableOpacity>
  ),
});

import React, { Fragment } from 'react';
import { Text, View } from 'react-native';

import { Header } from './src/components/Feed/Main';

const usersDB = [
  {
    id: 1,
    name: 'Denis',
  },
  {
    id: 2,
    name: 'Luiza',
  },

];

export default function App() {
  return (
    <View>
      <Header usersDB={usersDB}></Header>
    </View>
  );
}




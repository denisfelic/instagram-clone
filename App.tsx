import React, { Fragment } from 'react';
import { Text, View } from 'react-native';

import { Feed } from './src/components/Feed/Main';
import { Photo } from './src/components/Feed/Components/PostPhoto';
export default function App() {
  return (
    <View>
      <Feed />
    </View>
  );
}




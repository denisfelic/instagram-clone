import React from 'react';
import { View, Text, Image } from 'react-native';
import style from './style';

import { Photo } from '../PostPhoto';

export default function User({ user }: any) {
    return (
        <View>
            <View style={style.userContainer}>
                <Image style={style.userPicture} source={{ uri: user.userURL }} />
                <Text>{user.userName}</Text>
            </View>
            <Photo user={user} />
        </View>
    )
}
import React from 'react';
import { Image } from 'react-native';

import styles from './styles';

export default function Photo() {
    return (
        <Image style={styles.photo} source={require('../../../../assets/img/img2.jpg')} />
    );
}
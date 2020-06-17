import React from 'react';
import { Image, View, Text } from 'react-native';

import styles from './styles';

export default function Photo({ user }: any) {
    return (
        (
            <View>
                <Image style={styles.photo} source={{ uri: user.url }} />
                <View>
                    <Image style={styles.likeBtns} source={require('../../../../assets/img/like.png')} />
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore veritatis facere unde reiciendis nobis earum, soluta provident porro nisi sunt voluptate dolorem error architecto necessitatibus non perspiciatis nesciunt corrupti est.
                    </Text>
                </View>
            </View>
        )
    );
}

 
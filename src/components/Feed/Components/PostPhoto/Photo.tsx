// Post Photo
import React, { useState } from 'react';
import { Image, View, Text, TouchableOpacity, Alert } from 'react-native';

import styles from './styles';

export default function Photo({ user }: any) {

    const [like, setLike] = useState(false);
    const [likesCount, setLikesCount] = useState(user.likes);

    function renderLikeButton() {
        if (like) {
            return require('../../../../assets/img/like.png');
        }
        return require('../../../../assets/img/unlike.png');
    }

    function handleLike() {
        setLike(!like);
        handleLikesCount();
    }

    function handleLikesCount(){
        if(!like){
            setLikesCount(likesCount + 1);
        }
        else {
            setLikesCount(likesCount - 1);

        }
    }

    function renderLikesCount() {
        return likesCount + (likesCount > 1 ? ` likes` : ` like`);
    }

    return (
        (
            <View>
                <Image style={styles.photo} source={{ uri: user.url }} />
                <View>
                    <TouchableOpacity onPress={() => handleLike()}>
                        <Image style={styles.likeBtns} source={renderLikeButton()} />
                        <Text>{renderLikesCount()}</Text>
                    </TouchableOpacity>
                    <Text>{user.description}</Text>
                </View>
            </View>
        )
    );
}


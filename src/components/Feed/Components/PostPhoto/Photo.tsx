// Post Photo
import React, { useState } from 'react';
import { Image, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Comments } from '../Comments';
import styles from './styles';
import handleLikes from '../../../../api/likesBehaviorAPI';

export default function Photo({ user }: any) {

    const [likeState, setLikeState] = useState(false);
    const [likesAmount, setLikesAmount] = useState(user.likes);

    return (
        <View>
            <Image style={styles.photo} source={{ uri: user.url }} />
            <View>

                <TouchableOpacity
                    onPress={() => handleLikes.handleLikesButtonBehavior(likeState, setLikeState, likesAmount, setLikesAmount)}
                >
                    <View style={styles.likeContainer}>
                        <Image
                            style={styles.likeHeartIcon}
                            source={handleLikes.renderLikeButtonIcon(likeState)}
                        />
                        <Text style={likeState ? styles.likesAmountTextLiked : styles.likesAmountTextNoLike}>{handleLikes.renderLikeAmountText(likesAmount)}</Text>
                    </View>
                </TouchableOpacity>
                <Text>{user.description}</Text>
                <Comments comments={user.comentarios} />
            </View>
        </View>
    );
}


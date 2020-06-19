import React from 'react';
import { StyleSheet } from 'react-native';

import deviceDimensions from '../../../../config/DeviceDimensions';

const styles = StyleSheet.create({
    photo: {
        height: deviceDimensions.height / 2
    },
    likeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    likeHeartIcon: {
        width: 30,
        height: 25,
        marginTop: 5,
        marginLeft: 5,
    },
    likesAmountTextLiked: {
        marginLeft: 7,
        fontWeight: "bold"
    },
    likesAmountTextNoLike: {
        marginLeft: 7,
    }
});

export default styles
import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import deviceDimensions from '../../../../config/DeviceDimensions';

const styles = StyleSheet.create({
    photo: {
        height: deviceDimensions.height / 2
    },
    likeBtns: {
        width:30,
        height: 25,
        marginTop : 5,
        marginLeft : 5,
    }
});

export default styles
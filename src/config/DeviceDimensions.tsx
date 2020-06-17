import React from 'react';
import { Dimensions } from 'react-native';

const deviceDimensions = {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
}

export default deviceDimensions;
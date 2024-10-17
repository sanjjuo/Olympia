import { View } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';

const Loader = () => {
    return (
        <View>
            <Progress.Circle size={30} indeterminate={true} />
        </View>
    )
}

export default Loader
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ButtonDeleteTask } from '../styles';

export default function DeletTask({ delFunction, delIndex }) {
    return(
        <ButtonDeleteTask
            onPress={() => {delFunction(delIndex)}}
        >
            <Text>X</Text>
        </ButtonDeleteTask>
    )
}
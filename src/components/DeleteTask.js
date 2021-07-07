import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ButtonDeleteTask } from '../styles';

export default function DeletTask({ tasks, item, delTask }) {
    return(
        <ButtonDeleteTask
            onPress={() => {delTask(tasks.indexOf(item))}}
        >
            <Text>X</Text>
        </ButtonDeleteTask>
    )
}
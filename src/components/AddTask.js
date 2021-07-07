import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Keyboard } from 'react-native';
import { AppText, ButtonAddTask, InputTasks } from '../styles';

export default function AddTask({onSave}) {

    const [taskValue, setTaskValue] = useState('')

    return(
        <View>
            <InputTasks
                placeholder='New task'
                value={taskValue}
                onChangeText={(text) => {setTaskValue(text)}}
            />
            <ButtonAddTask onPress={() => {
                onSave(taskValue);
                setTaskValue('')
                Keyboard.dismiss()
                }}>
                <AppText>Save Task</AppText>
            </ButtonAddTask>
        </View>
    )
}

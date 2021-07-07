import React, { useRef } from 'react';
import { Text, View, Animated, StyleSheet, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable'
import styled from 'styled-components';
import DeleteTask from './DeleteTask';
import { AppText, List, Task, TaskGroup, ButtonDeleteTask, FinishSwipe, FinishTxt } from '../styles';

export default function FullTask({ item, arr, toggleComplete, delTask}) {

    function rightActions() {

        return(
            <View>
                <Text>.</Text>
            </View>
        )
        
    }

    const completeTask = () => {
        if(item.complete) {

            return(
                <AppText style={{textDecorationLine: 'line-through', color: '#B2B2B2'}}>{item.task}</AppText>
            )
        }
        else {
            return(
                <AppText>{item.task}</AppText>
            )
        }
    }

    return(
        <Swipeable
            renderRightActions={rightActions}
            onSwipeableRightWillOpen={toggleComplete}
        >
            <List>
                <TaskGroup>
                    <DeleteTask 
                        item={item}
                        tasks={arr}   
                        delTask={delTask} 
                    />
                    <Task>
                        {completeTask()}
                    </Task>
                </TaskGroup>
            </List>
        </Swipeable>
    )
}
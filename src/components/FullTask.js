import React, { useRef } from 'react';
import { Text, View, Animated, StyleSheet, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable'
import styled from 'styled-components';
import DeleteTask from './DeleteTask';
import { AppText, List, Task, TaskGroup, ButtonDeleteTask, FinishSwipe, FinishTxt } from '../styles';

export default function FullTask({ item, arr, toggleComplete, delTask}) {

    function leftActions(progress, dragX) {

        const scale = dragX.interpolate({
            inputRange:[0, 100],
            outputRange:[0, 1],
            extrapolate: 'clamp'
        })

        return(
            <FinishSwipe>
                <Animated.View  style={[{ transform: [{ scale: scale }]}, {
                    backgroundColor: '#A0FF98',
                    borderRadius: 15,
                    width: 100,
                    height: 37,
                    alignItems: 'center',
                    justifyContent: 'center',
                    }]}>
                    <TouchableOpacity
                    
                    >
                        <Text>finish</Text>
                    </TouchableOpacity>
                </Animated.View>
            </FinishSwipe>
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
            renderLeftActions={leftActions}
            onSwipeableLeftWillOpen={toggleComplete}
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
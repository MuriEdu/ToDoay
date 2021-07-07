import React from 'react';
import { Text, View, Animated, StyleSheet } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable'
import styled from 'styled-components';
import { AppText, List, Task, TaskGroup, ButtonDeleteTask, FinishSwipe, FinishTxt } from '../styles';

export default function FullTask({ item, toggleComplete }) {

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
                    <Text>finish</Text>
                </Animated.View>
            </FinishSwipe>
        )
    }

    return(
        <Swipeable
            renderLeftActions={leftActions}
            onSwipeableLeftOpen={toggleComplete}
        >
            <List>
                <TaskGroup>
                    <ButtonDeleteTask>
                        <Text>X</Text>
                    </ButtonDeleteTask>
                    <Task>
                        <AppText>{item.task}</AppText>
                    </Task>
                </TaskGroup>
            </List>
        </Swipeable>
    )
}
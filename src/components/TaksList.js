import React from 'react';
import { FlatList, View } from 'react-native';
import DeletTask from './DeleteTask';
import { AppText, List, Task, TaskGroup } from '../styles';

export default function TaskList({tasks, delTask}) {

    return(
       <List>
            {tasks.map((value, index) => {
                return (
                    <TaskGroup key={index}>
                        <DeletTask
                            delFunction={delTask}
                            delIndex={index}
                        />
                        <Task>
                            <AppText>{value}</AppText>
                        </Task>
                    </TaskGroup>
            )})}
       </List>
    )
}

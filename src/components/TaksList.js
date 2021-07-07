import React from 'react';
import { FlatList } from 'react-native';
import { Scroll } from '../styles';
import FullTask from './FullTask';

export default function TaskList({tasks, toggleComplete, delTask}) {

    return(
        <Scroll>
            <FlatList 
                data={tasks}
                keyExtractor={ item => item.id }
                renderItem={({ item }) => {
                    return(
                        <FullTask 
                        arr={tasks}
                        item={item}
                        delTask={delTask}
                        toggleComplete={() => {toggleComplete(tasks.indexOf(item))}}/>
                        )
                    }}
                />
        </Scroll>
    )
}

import React from 'react';
import { FlatList } from 'react-native';
import { Scroll } from '../styles';
import FullTask from './FullTask';

export default function TaskList({tasks, toggleComplete}) {

    return(
        <Scroll>
            <FlatList 
                data={tasks}
                keyExtractor={ item => item.task }
                renderItem={({ item }) => {
                    return(
                        <FullTask 
                        item={item}
                        toggleComplete={toggleComplete}/>
                        )
                    }}
                />
        </Scroll>
    )
}

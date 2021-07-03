import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Title } from './src/styles';
import AddTask from './src/components/AddTask';
import TaskList from './src/components/TaksList';

export default function App() {

  const [tasks, setTasks] = useState([])

  const saveTask = (task) => {
    setTasks([...tasks, task])
  }

  const delTask = (index) => {
    let updatedTask = [...tasks]
    updatedTask.splice(index, 1)
    setTasks(updatedTask)
  }

  return (
    <View >
      <Title>To Doay</Title>
      <AddTask onSave={saveTask}/>
      <TaskList tasks={tasks}
        delTask={delTask}
      />
    </View>
  );
}

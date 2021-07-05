import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { Title } from './src/styles';
import AddTask from './src/components/AddTask';
import TaskList from './src/components/TaksList';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  useEffect(() => {
    getLocalStorage()
  }, [])

  const [tasks, setTasks] = useState([])

  const saveTask = (task) => {
    const newTask = [...tasks, task]
    setTasks(newTask)
    setLocalStorage(newTask)
    console.log(task);
  }

  const delTask = (index) => {
    let updatedTask = [...tasks]
    updatedTask.splice(index, 1)
    setTasks(updatedTask)
    setLocalStorage(updatedTask)
  }

  const checkSetTask = (tasks) => {
    if (tasks[0] === '') {
      return 0;
    }
    else {
      setTasks(tasks)
    }
  } 

  const setLocalStorage = async (newTask) => {
    try {

      await AsyncStorage.setItem("@TASKS", JSON.stringify(newTask))
      
    } catch (e) {
      alert(e)
    }
  }

  let verifyLocalStorage = null

  const getLocalStorage = async () => {
    try {
      
       verifyLocalStorage = await AsyncStorage.getItem("@TASKS")

        const tasksFormated = format()
        const loadedTasks = tasksFormated.split(',')
        checkSetTask(loadedTasks)

    } catch (e) {
      alert(e)
    }
  }

  const format = () => {
    if (verifyLocalStorage === null) {
      verifyLocalStorage = ['']
    }
    else {
      const formatting1 = verifyLocalStorage.replace('[', '')
      const formatting2 = formatting1.replace(']', '')
      const formatting3 = formatting2.replace(/"/g, '')
      return formatting3
    }
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

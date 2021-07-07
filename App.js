import React, { useState, useEffect } from 'react';
import { View, Alert, TouchableOpacity, Text} from 'react-native';
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

    const objTask = {
      task,
      complete: false
    }

    if(task.trim()) {
      const newTask = [...tasks, objTask]
      setTasks(newTask)
      setLocalStorage(newTask)
    } else Alert.alert('Task not added', 'You cannot save a blank task')
    
  }

  const delTask = (index) => {
    let updatedTask = [...tasks]
    updatedTask.splice(index, 1)
    setTasks(updatedTask)
    setLocalStorage(updatedTask)
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
      const loadedTasks = JSON.parse(verifyLocalStorage)

      if (verifyLocalStorage === null) {
        Alert.alert('Welcome','Thanks for downloading ToDoay')
      }
      else {
        setTasks(loadedTasks)
      }

    } catch (e) {
      alert(e)
    }
  }

  return (
    <View >
      <Title>To Doay</Title>
      <AddTask onSave={saveTask}/>
      <TaskList tasks={tasks}
        delTask={delTask}
      />
      <TouchableOpacity
        onPress={() => {AsyncStorage.removeItem('@TASKS')}}
      >
        <Text>DELETE LOCAL</Text>
      </TouchableOpacity>
    </View>
  );
}

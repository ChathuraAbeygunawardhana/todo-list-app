import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';

export default function App() {
  const [enteredTaskName, setEnteredTaskName] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [tasks, setTasks] = useState([]);

  const taskNameInputHandler = (enteredText) => {
    setEnteredTaskName(enteredText);
  };

  const dateInputHandler = (enteredText) => {
    setEnteredDate(enteredText);
  };

  const deleteHandler = (taskId) => {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== taskId);
    });
  };

  const addTaskHandler = () => {
    const newTask = {
      id: Math.random().toString(),
      enteredTaskName: enteredTaskName,
      enteredDate: enteredDate,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Task'
          style={styles.textInputStyle}
          value={enteredTaskName}
          onChangeText={taskNameInputHandler}
        />
        <TextInput
          placeholder='Due Date'
          style={styles.textInputStyle}
          value={enteredDate}
          onChangeText={dateInputHandler}
        />
        <Button title='ADD' onPress={addTaskHandler} color='lightblue' />
      </View>
      <View style={styles.taskListContainer}>
        <Text style={styles.taskListTitle}>Tasks List</Text>
        <ScrollView>
          {tasks.map((task, index) => (
            <View key={index} style={styles.taskItem}>
              <Text style={styles.taskItemText}>{task.enteredTaskName}</Text>
              <Text style={styles.taskItemText}>{task.enteredDate}</Text>
              {/* button to delete  */}
              <Button
                title='Delete'
                color='#d68476'
                onPress={() => {
                  deleteHandler(task.id);
                }}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f5f5f5',
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    height: 35,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginBottom: 10,
    paddingBottom: 20,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  taskListContainer: {
    flex: 1,
    borderWidth: 1,
    margin: 5,
    padding: 10,
    backgroundColor: '#fff',
  },
  taskListTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  taskItem: {
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
    /* adding a shadow */
  },
  taskItemText: {
    fontSize: 16,
  },
});

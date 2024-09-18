import * as React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const AddTaskScreen = ({navigation, route}) => {
  const [newTask, setNewTask] = React.useState('');
  
  const {taskList, setTaskList} = route.params;

  const handleAddTask = () => {
    if(newTask.trim()){
      setTaskList([...taskList, newTask]);
      setNewTask('');
      navigation.navigate('ListTasks');
    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Add a New Task</Text>
      <TextInput
        placeholder="Enter Task Description"
        value={newTask}
        onChangeText={setNewTask}
        style={styles.input}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 24
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10
  }
});

export default AddTaskScreen;
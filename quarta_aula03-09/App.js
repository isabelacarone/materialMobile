import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListTasksScreen from './Views/ListTaskScreen';
import AddTaskScreen from './Views/AddTaskScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [taskList, setTaskList] = React.useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListTasks">
        <Stack.Screen name="ListTasks">
          {(props) => 
            <ListTasksScreen 
              {...props} 
              taskList={taskList}
              setTaskList={setTaskList}  
            />}
        </Stack.Screen>
        <Stack.Screen name="AddTask" component={AddTaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import * as React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';

const ListTasksScreen = ({navigation, taskList, setTaskList}) => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Your Task List</Text>
      {
        taskList.length === 0 ? (
          <View>
            <Text>No task added yet.</Text>
          </View>
        ) : (
          <FlatList
            data={taskList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text>{item}</Text>
              </View>
            )}
          />
        )
      }
      <Button 
        title="Add a New Task"
        onPress={() => navigation.navigate('AddTask', {taskList, setTaskList})}
      />
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
  item: {
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1
  }
});

export default ListTasksScreen;
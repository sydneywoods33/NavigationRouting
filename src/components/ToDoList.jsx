import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ToDoList = ({ tasks }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <View style={styles.taskContainer}>
          <Text style={styles.task}>{item.value}</Text>
        </View>
      )}
      keyExtractor={(item) => item.key}
    />
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  task: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    width: '90%',
    textAlign: 'center',
  },
});

export default ToDoList;
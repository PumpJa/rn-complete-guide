import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setcourseGoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setcourseGoals(courseGoals => [...courseGoals, {key: Math.random().toString(),  value: enteredGoal}]);
  }
  
  return (
    <View style={styles.screen}>
      <View 
        style={styles.inputContainer}>
        <TextInput 
          placeholder="Course Goal" 
          style={styles.input} 
          onChangeText={goalInputHandler}
          value={enteredGoal}/>
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        <FlatList 
          data={courseGoals} 
          renderItem={itemData => (
            <View style={styles.listItem}>
              <Text>{itemData.item.value}</Text>
            </View> 
          )}>
        </FlatList>
      </View>
    </View>
  );
}



// {courseGoals.map((goal) => (
//   <View key={goal} style={styles.listItem}>
//     <Text>{goal}</Text>
//   </View> 
// ))} 


const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  input: {
    width: '80%', 
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});



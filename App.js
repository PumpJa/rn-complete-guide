import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setcourseGoals] = useState([]);
  const [isAddMode, setIsAddMode]  = useState(false);


  const addGoalHandler = goalTitle => {
    setcourseGoals(courseGoals => [...courseGoals, {id: Math.random().toString(),  value: goalTitle}]);
    setIsAddMode(false);
  }
  
  const removeGoalHandler = goalId => {
    setcourseGoals(courseGoals => {
      return courseGoals.filter((goal) => goal.id !== goalId);
    });
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new Goal" onPress={ () => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler}/>
      <View>
        <FlatList 
          keyExtractor={(item, index) => item.id}
          data={courseGoals} 
          renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>}
        />
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


});



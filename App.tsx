import React from 'react';
import {Button, FlatList, StyleSheet, Text, View, Alert} from 'react-native';
import Count from './Count';

export default function App() {
  
  const data=[
{text : "item1", id: "1"},
{text : "item1", id: "2"},
{text : "item1", id: "3"},
{text : "item1", id: "4"},
{text : "item1", id: "5"},
{text : "item1", id: "6"},
{text : "item1", id: "7"},
{text : "item1", id: "8"},

  ];
  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Counter Application </Text>
    <Count/>

   

    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
 },
heading:{

fontSize: 30,
fontWeight: '500',
marginHorizontal: 10,
marginVertical: 5,
},

list:{

  paddingHorizontal: 5,
  paddingVertical: 10,
  backgroundColor: 'grey',
  color: 'while',
marginVertical:10,
marginHorizontal: 5,
   
}

});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Button, FlatList, StyleSheet, Text, View, Alert} from 'react-native';
import InputForm from './TextInupt';


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
      <Text style={styles.heading}> <strong>Hello world </strong></Text>
    <InputForm/>
    <FlatList 
    numColumns = {4}
    data={data} 
    renderItem={({ item }) => <Text style={styles.list}> {item.text}</Text>} 
   
    />
   

   <Button
        title="Press me"
        onPress={() => alert('Simple Button pressed')}
      />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
 },
heading:{

fontSize: 40,
fontWeight: '700'
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

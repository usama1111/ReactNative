import React, { useState } from 'react';
import {View, TextInput, Text ,StyleSheet} from 'react-native';

const InputForm = ()=>{

const [text, settext] = useState("");
console.log(text);
return(
    <View>
    <TextInput  style={styles.input}  placeholder="Enter Name"
    onChangeText={(val) => settext(val)}
    />
    </View>
   
   
    );
};
 
const styles = StyleSheet.create({
input:{

width: 200,
borderWidth: 1,
height: 30,
borderRadius: 10,
paddingLeft: 5,

}

 })



export default InputForm;

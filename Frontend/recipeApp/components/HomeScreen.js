import React, { useEffect, useState } from 'react'
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Select, Form, FormGroup, Label, Input  } from  'reactstrap';

const HomeScreen = ()=>{
  const [inputs, setInputs] = useState([{key: '', value: ''}]);

  const addHandler = ()=>{
    const _inputs = [...inputs];
    _inputs.push({key: '', value: ''});
    setInputs(_inputs);
  }
  
  const deleteHandler = (key)=>{
    const _inputs = inputs.filter((input,index) => index != key);
    setInputs(_inputs);
  }

  const inputHandler = (text, key)=>{
    const _inputs = [...inputs];
    _inputs[key].value = text;
    _inputs[key].key   = key;
    setInputs(_inputs);
    
  }

  const inputHandlerAmount = (text, key)=>{
    const _inputs = [...inputs];
    _inputs[key].value = text;
    _inputs[key].key   = key;
    setInputs(_inputs);
    
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.inputsContainer}>
      {inputs.map((input, key)=>(
        <View style={styles.inputContainer}>
          <Input style={{marginRight: 15, padding: 10}} placeholder={"Zutat"} value={input.value}  onChangeText={(text)=>inputHandler(text,key)} />
          <Input style={{marginRight: 15, padding: 10}} placeholder={"Menge"} value={input.value}  onChangeText={(text)=>inputHandlerAmount(text,key)} />
 
          <Form>
            <FormGroup>
              {/* <Label for="exampleSelect">Select</Label> */}
              <Input className="form-control" type="select" placeholder="Einheit" name="select" id="exampleSelect">
                <option>kg</option>
                <option>l</option>
                <option>ml</option>
                <option>g</option>
                <option>Stk</option>
              </Input>
            </FormGroup>
          </Form>
          <Button color="red" title="Eintrag löschen" onPress={() => deleteHandler(key)}>
          </Button>
        </View>
      ))}
      </ScrollView>
      <Button title="Neue Zutat" onPress={addHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    
   
  },
  inputsContainer: {
    flex: 1, marginBottom: 20
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
   
   
  }
})

export default HomeScreen
import React, { useEffect, useState } from 'react'
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Select, Form, FormGroup, Label, Input, Row, Col } from  'reactstrap';

const DynamicFormSteps = ()=>{
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

  return (
    <View style={styles.container}>
      <ScrollView style={styles.inputsContainer}>
      {inputs.map((input, key)=>(
        <View style={styles.inputContainer}>
 
          <Form>
            <FormGroup>
              <Row>
                <Col>
                  <Input type="textarea" style={{marginRight: 15, padding: 10, marginTop: 10}} placeholder={"Bearbeitungsschritt"} value={input.value}  onChangeText={(text)=>inputHandler(text,key)} />
                </Col>
              </Row>
            </FormGroup>
          </Form>
          <Button color="red" title="Eintrag löschen" onPress={() => deleteHandler(key)}>
          </Button>
        </View>
      ))}
      </ScrollView>
      <Button title="Neuer Schritt" onPress={addHandler} />
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

export default DynamicFormSteps
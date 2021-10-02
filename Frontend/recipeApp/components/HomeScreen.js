import React, { useEffect, useState } from 'react'
 import "./HomeScreen.css"
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Select, Form, FormGroup, Label, Input, Row, Col } from  'reactstrap';


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
 
          <Form>
            <FormGroup  >
              <Row>
                <Col>
                  <Input    placeholder={"Zutat"} value={input.value}  onChangeText={(text)=>inputHandler(text,key)} />
                  {/* style={{marginRight: 15, padding: 10}} */}
                </Col>
                <Col>
                  <Input   placeholder={"Menge"} value={input.value}  onChangeText={(text)=>inputHandlerAmount(text,key)} />
                </Col>
                {/* style={{marginRight: '10px'}} */}
              {/* <Label for="exampleSelect">Select</Label> */}
                <Col>
                  <Input  type="select" placeholder="Einheit" name="select" id="exampleSelect">
                    <option>kg</option>
                    <option>l</option>
                    <option>ml</option>
                    <option>g</option>
                    <option>Stk</option>
                  </Input>
                {/* </Col>
                <Col> */}
          </Col>
                <Col>
                <Button  className= "test2" color="red" type="submit" title="Eintrag löschen" onPress={() => deleteHandler(key)}>
          </Button>
          </Col>
         
              </Row>
            </FormGroup>
          </Form>
        
        </View>
      ))}
      </ScrollView>
      <Button  color="green" title="Neue Zutat" onPress={addHandler} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 20,
    // backgroundColor: 'white',
    
   
  },
  inputsContainer: {
    flex: 1, marginBottom: 20
  },
  inputContainer: {
    padding: '1%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    
    
   
   
  }
})

export default HomeScreen
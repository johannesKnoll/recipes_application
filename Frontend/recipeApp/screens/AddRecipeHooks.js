import React, { Component, useState } from 'react';
import './AddRecipe.css';
import { Container, Form, Input, Label, FormGroup, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { SafeAreaView, ScrollView, View, Button } from 'react-native';

export default function AddRecipeHooks(){
    const [inputValue, setInputValue] = useState("");

    const onChange = (e) =>{
        setInputValue(e.target.value)
    }
    const onDelete = (e) =>{
        console.log(inputValue)
    }
    return (
        <Form>
                            <FormGroup>
                              <Row>
                                <Col>
                                  <Input type="name" name="steps" style={{ marginRight: 15, padding: 10, marginTop: 10 }}
                                    // onChange={e => console.log(e.target.value, "Steps event")}
                                    value ={inputValue}
                                    onChange={onChange}
                                    />
                                </Col>
                              </Row>
                            </FormGroup>
                          
                          <Button color="red" title="Eintrag löschen" onPress={onDelete}>
                          </Button>
                          </Form>
    )
}
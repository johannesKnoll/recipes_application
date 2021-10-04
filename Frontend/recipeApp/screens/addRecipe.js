import React, { Component, useState } from 'react';
import './AddRecipe.css';
import { Link } from 'react-router-dom';
import { SafeAreaView, ScrollView, View, Button } from 'react-native';
import { Container, Form, Input, Label, FormGroup, Row, Col } from 'reactstrap';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { createRecipe } from '../api';
import Steps from "./Steps"
import StepZutat from "./StepZutat"
import axios from 'axios';



class AddRecipe extends Component {
  emptyRecipe = {
    name: 'default',
    time: 0,
    image: '/recipes/recipe-background-alt.jpg',
    calories: 0,
    protein: 0,
    fat: 0,
    carbohydrate: 0,
    ingredients: 'Rice',
    preparation: [],
    ingredients: [],
    hasMeat: false,
    isVegetarian: false,
    isVegan: false,
    ///stepList: [{ index: Math.random(), description: "" }],
    // category: { id: '1', name: 'Vegan' }
  }


  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      imageFilePath: null,
      categories: [],
      recipes: [],
      recipe: this.emptyRecipe,
      stepZutat: [{ index: Math.random(), zutat: "", menge: "", einheit: "" }],
      stepList: [{ index: Math.random(), description: "" }],

      inputs: [
        {
          key: '',
          value: ''
        }
      ],
      inputsSteps: [
        {
          key: '',
          value: ''
        }
      ],
      inputDescription: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.setStateCategory = this.setStateCategory.bind(this);
    this.seveRecipe = this.seveRecipe.bind(this);
    this.seveStepZutat = this.seveStepZutat.bind(this);

  }
  //   state = {
  //     stepList: [{ index: Math.random(), description: "" }],

  // }
  handleChangee = (e) => {
    if (["description"].includes(e.target.name)) {
      let stepList = [...this.state.stepList]
      stepList[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }
  handleChangeZutat = (e) => {
    if (["zutat", "menge", "einheit"].includes(e.target.name)) {
      let stepZutat = [...this.state.stepZutat]
      stepZutat[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  seveRecipe = () => {
    const saveList = this.state.stepList;
    let preperationList = [];
    console.log(saveList);
    saveList.map(element => {
      preperationList.push(element.description)
    })
    console.log(preperationList);
    this.state.recipe['preperation'] = preperationList;
    console.log(this.state.recipe);

  }

  seveStepZutat = () => {
    const saveList = this.state.stepZutat;
    let zutatList = [];

    console.log(saveList);
    saveList.map(element => {
      let zutat = element.menge + "" + element.einheit + " " + element.zutat;
      zutatList.push(zutat)
    })
    console.log(zutatList);
    this.state.recipe['ingredients'] = zutatList;
    console.log(this.state.recipe);

  }

  addNewRoww = () => {
    this.setState((prevState) => ({
      stepList: [...prevState.stepList, { index: Math.random(), description: "" }],
    }));
  }
  // deteteRoww = (index) => {
  //   this.setState({
  //     stepList: this.state.stepList.filter((s, sindex) => index !== sindex),
  //   });
  //   // const stepList1 = [...this.state.stepList];
  //   // stepList1.splice(index, 1);
  //   // this.setState({ stepList: stepList1 });
  // }
  addNewRowZutat = () => {
    this.setState((prevState) => ({
      stepZutat: [...prevState.stepZutat, { index: Math.random(),  zutat: "", menge: "", einheit: ""  }],
    }));
  }
  deteteRowZutat = (index) => {
    this.setState({
      stepZutat: this.state.stepZutat.filter((s, sindex) => index !== sindex),
    });
    // const stepList1 = [...this.state.stepList];
    // stepList1.splice(index, 1);
    // this.setState({ stepList: stepList1 });
  }
  handleSubmitt = (e) => {
    e.preventDefault();
    console.log(this.state)
  }
  clickOnDeletee(record) {
    this.setState({
      stepList: this.state.stepList.filter(r => r !== record)
    });
  }

  clickOnDeleteZutat(record) {
    this.setState({
      stepZutat: this.state.stepZutat.filter(r => r !== record)
    });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    console.log(value);

    const name = target.name;
    let newRecipe = { ...this.state.recipe };
    console.log(this.state);
    console.log(newRecipe);

    newRecipe.name = value;
    console.log(newRecipe);
    this.setState({ recipe: newRecipe });
    setTimeout(function () {
      console.log(this.state)
    }, 1000);
    console.log(this.state);
    //recipe['preparation'].push("Test");
    console.log(this.state.recipe, "Recipe handle Change");
  }



  handleChangeTime(event) {
    const target = event.target;
    const value = target.value;
    const time = target.time;
    let recipe = { ...this.state.recipe };
    recipe[time] = value;
    this.setState({ recipe });
    console.log(this.state.recipe, "Recipe handle Change");
  }

  setStateCategory(event) {
    const target = event.target;
    const value = target.checked;
    const name = target.name;
    let recipe = { ...this.state.recipe };
    recipe[name] = value;
    this.setState({ recipe });
    console.log(this.state.recipe, "Recipe handle Change");
  }

  // setSteps(event) {
  //   let value = event.target.value;
  //   //     console.log(value)
  //   // let newRecipe ={...this.state.recipe}
  //   // console.log(newRecipe)
  //   //     newRecipe.
  //   this.setState({
  //     inputDescription: value
  //   })
  //   console.log(this.state)
  // }


  handleChangeImage(event) {
    const target = event.target;
    const value = target.files[0].name;
    const name = target.name;
    let recipe = { ...this.state.recipe };
    recipe[name] = value;
    this.setState({ recipe });
  }

  handleChangeCategory(event) {
    const target = event.target;
    const selectedIndex = target.selectedIndex + 1;
    const value = target.checked;
    const name = target.name;
    let recipe = { ...this.state.recipe };
    recipe[name].id = selectedIndex;
    recipe[name].name = value;
    this.setState({ recipe });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { recipe } = this.state;
    await fetch('http://localhost:8080/product/createProduct', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipe)
    });
    console.log(recipe);
  }

  async componentDidMount() {
    const responseCategory = await fetch('http://localhost:8080/product/createProduct');
    const bodyCategory = await responseCategory.json();
    // this.setState({
    //   categories: bodyCategory,
    //   isLoading: false
    // });

    const responseRecipe = await fetch('http://localhost:8080/product/createProduct');
    const bodyRecipe = await responseRecipe.json();
    this.setState({
      recipes: bodyRecipe,
      isLoading: false
    });
  }

  render() {
    const title = <h3 className="pt-2" style={{ display: 'flex', justifyContent: 'center' }}>Add New Recipe</h3>
    const { categories, isLoading } = this.state;
    let { stepList } = this.state
    let { stepZutat } = this.state
    // const newRecipe = {
    //   name: "Frontend Yippie",
    //   description: [
    //       "Test",
    //       "Test"
    //   ],
    //   calories: 100.0,
    //   protein: 0.0,
    //   fat: 100.0,
    //   carbohydrate: 100.0,
    //   time: 100,
    //   hasMeat: true,
    //   picture: "pic",
    //   ingredients: [
    //       "200g Kartoffeln"
    //   ],
    //   public: true,
    //   vegan: false,
    //   vegetarian: false
    // };

    // createRecipe(newRecipe);

    // Methods for adding and deleting ingredients
    //const [inputs, setInputs] = React.useState([{key: '', value: ''}]);

    const addHandler = (event) => {
      const _inputs = [...this.state.inputs];
      _inputs.push({ key: '', value: '' });
      this.setState({
        inputs: _inputs
      })

      console.log(event.target.value);
    }

    const deleteHandler = (key) => {
      const _inputs = this.state.inputs.filter((input, index) => index != key);
      this.setState({
        inputs: _inputs
      })
    }

    const inputHandler = (text, key) => {
      const _inputs = [...this.state.inputs];
      _inputs[key].value = text;
      _inputs[key].key = key;
      this.setState({
        inputs: _inputs
      })
    }




    //Methods for adding and deleting cooking steps
    const addHandlerSteps = (e) => {
      let _inputs = [...this.state.inputsSteps];
      _inputs.push(this.state.inputDescription);
      this.setState({
        inputsSteps: _inputs
      })
      console.log(this.state)


      let newInputs = [...this.state.inputsSteps, { key: '', value: '' }];
      this.setState({
        inputsSteps: newInputs
      })
    }
    const deleteHandlerSteps = (key) => {
      const _inputs = this.state.inputsSteps.filter((input, index) => index != key);
      this.setState({
        inputsSteps: _inputs
      })
    }


    const inputHandlerSteps = (text, key) => {
      const _inputs = [...this.state.inputsSteps];
      _inputs[key].value = text;
      _inputs[key].key = key;
      this.state.setInputs(_inputs);
    }

    // if(isLoading) {
    //   return (
    //     <div>Loading...</div>
    //   );
    // }

    let optionList = categories.map(category => <option id={category.id}> {category.name} </option>);


    return (
      <form onSubmit={this.handleSubmitt} onChange={this.handleChangee} onChange={this.handleChangeZutat}>
        <SafeAreaView
          showHorizontalScrollIndicator={false}
          showVerticalScrollIndicator={false}
          style={{ flex: 1, backgroundColor: "white" }}
        >
          <NotificationContainer />

          <ScrollView showVerticalScrollIndicator={false}>
            <div className="Site">

              <div className="Home-image"></div>
              <Container className="Site-content">
                <Form onSubmit={this.handleSubmit} className="test">
                  {title}
                  <FormGroup>
                    <Row>
                      <Col>
                        <Label for="name" placeholder="Name">Name</Label>
                        <Input type="name" name="name" id="name" onChange={this.handleChange} autoComplete="name" />
                      </Col>
                      <Col>
                        <Label>Zeitaufwand (in Min)</Label>
                        <Input type="number" name="time" id="time" placeholder="Zeit" onChange={this.handleChange} autoComplete="time"></Input>
                      </Col>
                    </Row>
                  </FormGroup>

                  <FormGroup>
                    <Row>
                      <Col>
                        <Label>Kalorien</Label>
                        <Input type="number" name="calories" placeholder="Kalorien" onChange={this.handleChange}></Input>
                      </Col>
                      <Col>
                        <Label>Proteine</Label>
                        <Input type="number" name="protein" placeholder="Proteine" onChange={this.handleChange}></Input>
                      </Col>
                      <Col>
                        <Label>Fett</Label>
                        <Input type="number" name="fat" placeholder="Fett" onChange={this.handleChange}></Input>
                      </Col>
                      <Col>
                        <Label>Kohlenhydrate</Label>
                        <Input type="number" name="carbohydrate" placeholder="Kohlenhydrate" onChange={this.handleChange}></Input>
                      </Col>
                    </Row>
                  </FormGroup>

                  <FormGroup>
                    <Label for="image">Bild aussuchen: </Label>
                    <input className="mt-2 ml-2" type="file" name="image" onChange={this.handleChangeImage} />
                  </FormGroup>

                  <FormGroup>
                    <Label for="category">Kategorie</Label>
                    <div className="form-check">
                      <input className="form-check-input" name="hasMeat" type="checkbox" value="" id="defaultCheck1" onChange={e => this.setStateCategory(e)} />
                      <label className="form-check-label" htmlFor="defaultCheck1">
                        Fleisch
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" name="isVegetarian" type="checkbox" value="" id="defaultCheck1" onChange={e => this.setStateCategory(e)} />
                      <label className="form-check-label" htmlFor="defaultCheck1">
                        Vegetarisch
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" name="isVegan" type="checkbox" value="" id="defaultCheck2" onChange={e => this.setStateCategory(e)} />
                      <label className="form-check-label" htmlFor="defaultCheck2">
                        Vegan
                      </label>
                    </div>
                  </FormGroup>
                  <Label>Zutaten</Label>

                  <View style={{
                    flex: 1,
                    padding: 20,
                    backgroundColor: 'white',
                  }}>
                    <ScrollView style={{
                      flex: 1,
                      marginBottom: 20
                    }}>
                      {this.state.inputs.map((input, key) => (
                        <View style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          borderBottomWidth: 1,
                          borderBottomColor: "lightgray"
                        }}>
                          <Form>
                            <FormGroup>
                              {/*   
                            <Row>
                                <Col>
                                  <Input style={{ marginRight: 15, padding: 10, marginTop: 10 }} type="name" placeholder={"Zutat"} onChangeText={(text) => inputHandler(text, key)} />
                                </Col>
                                <Col>
                                  <Input style={{ marginRight: 15, padding: 10, marginTop: 10 }} type="name" placeholder={"Menge"} onChangeText={(text) => inputHandler(text, key)} />
                                </Col>
                                {/* <Label for="exampleSelect">Select</Label> 
                                <Col>
                                  <Input style={{ marginRight: 15, padding: 10, marginTop: 10 }} className="form-control" type="select" placeholder="Einheit" name="select" id="exampleSelect">
                                    <option>kg</option>
                                    <option>l</option>
                                    <option>ml</option>
                                    <option>g</option>
                                    <option>Stk</option>
                                  </Input>
                                </Col>
                              </Row> */}
                              <Row>
                                <Col>

                                  <tbody>
                                    <StepZutat add={this.addNewRowZutat} delete={this.clickOnDeleteZutat.bind(this)} stepZutat={stepZutat} />
                                  </tbody>
                                </Col>
                              </Row>
                            </FormGroup>
                          </Form>
                          <Button color="red" title="Eintrag löschen" onPress={() => deleteHandler(key)}>
                          </Button>
                        </View>
                      ))}
                    </ScrollView>
                    <Button title="Neue Zutat" onPress={e => addHandler} />
                  </View>

                  {/* <HomeScreen /> */}
                  {/* <Label for="ingredients">Ingredients</Label>
              <Input type="text" name="ingredients" id="ingredients" onChange={this.handleChange}/> */}

                  <FormGroup>
                    <Label>Bearbeitungsschritte</Label>

                    <View style={{
                      flex: 1,
                      padding: 20,
                      backgroundColor: 'white',
                    }}>
                      <ScrollView style={{
                        flex: 1,
                        marginBottom: 20
                      }}>
                        {this.state.inputsSteps.map((input, key) => (
                          <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderBottomWidth: 1,
                            borderBottomColor: "lightgray",
                          }}>

                            <Form>
                              <FormGroup>
                                <Row>
                                  <Col>
                                    {/* <Input type="name" name="steps" style={{ marginRight: 15, padding: 10, marginTop: 10 }}
                                      placeholder={"Bearbeitungsschritt"}

                                      // onChange={e => console.log(e.target.value, "Steps event")}
                                      value={this.state.inputDescription}
                                      onChange={(e) => this.setSteps(e)}
                                    /> */}
                                    <tbody>
                                      <Steps add={this.addNewRowZutat} delete={this.clickOnDeletee.bind(this)} stepList={stepList} placeholder={"Bearbeitungsschritt"} />
                                    </tbody>
                                  </Col>
                                </Row>
                              </FormGroup>
                            </Form>
                            {/* <Button color="red" title="Eintrag löschen" onClick={() => deleteHandlerSteps(key)}>
                            </Button> */}
                          </View>
                        ))}
                      </ScrollView>
                      <Button title="Neuer Schritt" onClick={(e) => addHandlerSteps(e)}
                      />
                    </View>

                  </FormGroup>

                  <FormGroup>
                    <Row>
                      <Col>
                        <Button title="Save Recipe"
                          onPress={() => {
                            { this.seveRecipe };
                            { this.seveStepZutat };
                          }}
                          // onPress ={this.seveStepZutat }
                        ></Button>
                      </Col>
                      <Col>
                        <Button title="Cancel"></Button>
                      </Col>
                    </Row>
                  </FormGroup>

                </Form>
              </Container>

            </div>
          </ScrollView>
        </SafeAreaView>
      </form>
    );
  }
}

export default AddRecipe;
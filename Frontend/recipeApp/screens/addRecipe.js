import React, { Component, useState } from 'react';
import './AddRecipe.css';
import { Link } from 'react-router-dom';
import { SafeAreaView, ScrollView, View, Button } from 'react-native';
import { Container, Form, Input, Label, FormGroup, Row, Col } from 'reactstrap';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { createRecipe, login } from '../api';
import Steps from "./Steps";
import StepZutat from "./StepZutat";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import FooterMenu from '../components/FooterMenu';



class AddRecipe extends Component {
  emptyRecipe = {
    name: 'default',
    description: [],
    calories: 0,
    protein: 0,
    fat: 0,
    carbohydrate: 0,
    time: 0,
    hasMeat: false,
    picture: "",
    ingredients: [],
    isPublic: false,
    isVegan: false,
    isVegetarian: false
  }


  constructor(props) {
    super(props);
    this.state = {
      navigation: null,
      isLoading: true,
      imageFilePath: null,
      categories: [],
      recipes: [],
      picture: null,
      file: null,
      base64URL: "",
      recipe: this.emptyRecipe,
      stepList: [{ index: Math.random(), description: "" }],
      stepZutat: [{ index: Math.random(), zutat: "", menge: "", einheit: "" }],

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
    this.onPressHandlerEntdecken = this.onPressHandlerEntdecken.bind(this);
    this.onPressHandlerHome = this.onPressHandlerHome.bind(this);
    this.onPressHandlerFavoriten = this.onPressHandlerFavoriten.bind(this);
    this.onPressHandlerHinzufuegen = this.onPressHandlerHinzufuegen.bind(this);
    this.onPressHandlerUser = this.onPressHandlerUser.bind(this);
    // this.ifSaveisOkay = this.ifSaveisOkay.bind(this);

  }

  // ifSaveisOkay = (e) =>{
  //   var i = true;
  //   if(i === true){
  //   if(this.state.recipe.name===""){
  //     NotificationManager.warning("Please Fill up Name Field .");
  //     window.location.reload(false);
  //     return i= false;
  //   } if (this.state.recipe.calories===0){
  //     NotificationManager.warning("Please Fill up calories Field . ");
  //     window.location.reload(false);
  //     return i= false; 
  //   } if (this.state.recipe.time===0){
  //     NotificationManager.warning("Please Fill up time Field . ");
  //     window.location.reload(false);
  //     return i= false;
  //   }
  //    if (this.state.recipe.isVegetarian===false && this.state.recipe.isVegan===false && this.state.recipe.hasMeat===false){
  //     NotificationManager.warning("Please Fill up Kategorie Field . ");
  //     window.location.reload(false);
  //     return i= false;
  //   }
  //    if (this.state.recipe.protein===0){
  //     NotificationManager.warning("Please Fill up protein Field . ");
  //     window.location.reload(false);
  //     return i= false;
  //   }
  //    if (this.state.recipe.fat===0){
  //     NotificationManager.warning("Please Fill up fat Field . ");
  //     window.location.reload(false);
  //     return i= false;
  //   }if (this.state.recipe.carbohydrate===0){
  //     NotificationManager.warning("Please Fill up carbohydrate Field . ");
  //     window.location.reload(false);
  //     return i= false;
  //   }
  //    if (this.state.recipe.description===0){
  //     NotificationManager.warning("Please Fill up description Field . ");
  //     window.location.reload(false);
  //     return i= false;
  //   }  if (this.state.recipe.ingredients===0){
  //     NotificationManager.warning("Please Fill up calories Field . ");
  //     window.location.reload(false);
  //     i= false;
  //   }if (this.state.recipe.picture===""){
  //     NotificationManager.warning("Please Fill up calories Field . ");
  //     window.location.reload(false);
  //     return i= false;
  //   }
  // }

  //     return this.saveRecipe

  // }
  handleChangee = (e) => {
    if (["description"].includes(e.target.name)) {
      let stepList = [...this.state.stepList]
      stepList[e.target.dataset.id][e.target.name] = e.target.value;
    }
    else if (["zutat"].includes(e.target.name)) {
      let stepZutatChange = [...this.state.stepZutat];
      stepZutatChange[e.target.dataset.id][e.target.name] = e.target.value;
    }
    else if (["menge"].includes(e.target.name)) {
      let stepMengeChange = [...this.state.stepZutat];
      stepMengeChange[e.target.dataset.id][e.target.name] = e.target.value;
    }
    else if (["einheit"].includes(e.target.name)) {
      let stepEinheitChange = [...this.state.stepZutat];
      stepEinheitChange[e.target.dataset.id][e.target.name] = e.target.value;
    }
    else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  saveRecipe = () => {
    this.seveRecipe();
    this.seveRecipeZutat();

    login("thorstenBorsten", "password");
    createRecipe(this.state.recipe);
  }

  seveRecipe = () => {
    const saveList = this.state.stepList;
    let preperationList = [];
    //console.log(saveList);
    saveList.map(element => {
      preperationList.push(element.description)
    })
    // console.log(preperationList);
    this.state.recipe['description'] = preperationList;
    console.log(this.state.recipe);
    //window.location.reload(false);

  }

  seveRecipeZutat = () => {
    const saveList = this.state.stepZutat;
    let preperationListZutat = [];
    // console.log(saveList);
    saveList.map(element => {
      const newZutat = element.menge + " " + element.einheit + " " + element.zutat;
      //  console.log("Zutaten", newZutat);
      preperationListZutat.push(newZutat)
    })
    // console.log(preperationListZutat);
    this.state.recipe['ingredients'] = preperationListZutat;
    console.log(this.state.recipe);

  }

  addNewRoww = () => {
    this.setState((prevState) => ({
      stepList: [...prevState.stepList, { index: Math.random(), description: "" }],
    }));
  }
  deteteRoww = (index) => {
    this.setState({
      stepList: this.state.stepList.filter((s, sindex) => index !== sindex),
    });
    // const stepList1 = [...this.state.stepList];
    // stepList1.splice(index, 1);
    // this.setState({ stepList: stepList1 });
  }

  addNewRowZutat = () => {
    this.setState((prevState) => ({
      stepZutat: [...prevState.stepZutat, { index: Math.random(), zutat: "", menge: "", einheit: "" }],
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
    //  console.log(this.state)
  }
  clickOnDeletee(record) {
    this.setState({
      stepList: this.state.stepList.filter(r => r !== record)
    });
  }

  clickOnDeleteeZutat(record) {
    this.setState({
      stepZutat: this.state.stepZutat.filter(r => r !== record)
    });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let recipe = { ...this.state.recipe };
    recipe[name] = value;
    this.setState({ recipe: recipe });
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

  setStatePublic(event) {
    const target = event.target;
    const value = target.checked;
    const name = target.name;
    let recipe = { ...this.state.recipe };
    recipe[name] = value;
    this.setState({ recipe });
    console.log(this.state.recipe, "Recipe handle Change");
  }

  setSteps(event) {
    let value = event.target.value;
    //     console.log(value)
    // let newRecipe ={...this.state.recipe}
    // console.log(newRecipe)
    //     newRecipe.
    this.setState({
      inputDescription: value
    })
    console.log(this.state)
  }


  handleChangeImage(event) {
    const target = event.target;
    const value = target.files[0].name;
    console.log(target.files[0])
    const name = target.name;
    let recipe = { ...this.state.recipe };
    recipe[name] = value;
    this.setState({ recipe });

  }
  getBase64 = file => {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        baseURL = reader.result;
        console.log("this is the String: ", baseURL);
        resolve(baseURL);
        // this.setState({
        //   picture: baseURL
        // })
        const value = baseURL
        const name = "picture"
        let recipe = { ...this.state.recipe };
        recipe[name] = value;
        this.setState({ recipe });

      };
      console.log(fileInfo);
    });
  };

  handleFileInputChange = e => {
    console.log(e.target.files[0]);
    let { file } = this.state;

    file = e.target.files[0];

    this.getBase64(file)
      .then(result => {
        file["base64"] = result;
        console.log("File Is", file);
        this.setState({
          base64URL: result,
          file,
        });
        console.log(e)

      }).catch(err => {
        console.log(err);
      });

    this.setState({
      file: e.target.files[0]
    });



  };
  // state = {
  //   file: null,
  //   base64URL: ""
  // };


  onPressHandlerHome() {
    // this.setState({ navigation: useNavigation() });
    // console.log(navigation)
    // this.navigation.navigate('home');
     this.props.navigation.navigate('home')
  }
  onPressHandlerFavoriten() {
    // this.setState({ navigation: useNavigation() });
    // console.log(navigation)
    // this.navigation.navigate('favoriten');
    this.props.navigation.navigate('favoriten')
  }
  onPressHandlerEntdecken() {
    // this.setState({ navigation: useNavigation() });
    // console.log(navigation)
    // this.navigation.navigate('entdecken');
    this.props.navigation.navigate('entdecken')
  }
  onPressHandlerHinzufuegen() {
    // this.setState({ navigation: useNavigation() });
    // console.log(navigation)
    // this.navigation.navigate('hinzufuegen');
    this.props.navigation.navigate('hinzufuegen')
  }
  onPressHandlerUser() {
    // this.setState({ navigation: useNavigation() });
    // console.log(navigation)
    // this.navigation.navigate('user');
    this.props.navigation.navigate('home')
  }

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



    const title = <h3 className="pt-2" style={{ display: 'flex', justifyContent: 'center' }}>Neues Rezept Hinzuf??gen</h3>
    const { categories, isLoading } = this.state;
    let { stepList, stepZutat } = this.state
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
      <form onSubmit={this.handleSubmitt} onChange={this.handleChangee}>
        <SafeAreaView
          showHorizontalScrollIndicator={false}
          showVerticalScrollIndicator={false}
          style={{ flex: 1, backgroundColor: "white" }}
        >
          <NotificationContainer />

          <ScrollView
            showHorizontalScrollIndicator={false}
            showVerticalScrollIndicator={false}>
            <div className="Site">

              <div className="Home-image"></div>
              <Container className="Site-content">
                <Form onSubmit={this.handleSubmit} className="test">
                  {title}
                  <FormGroup>
                    <Row>
                      <Col>
                        <Label for="name" >Name</Label>
                        <Input type="name" name="name" placeholder="Name" id="name" onChange={this.handleChange} autoComplete="name" />
                      </Col>
                      <Col>
                        <Label>Zeitaufwand (in Min)</Label>
                        <Input type="number" name="time" id="time" placeholder="Zeit" onChange={this.handleChange} ></Input>
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

                  <FormGroup
                    style={{
                      marginLeft: 15,
                    }}>
                    <Label for="image">Bild aussuchen: </Label>
                    <input className="mt-2 ml-2" type="file" name="picture" onChange={this.handleFileInputChange} />
                  </FormGroup>

                  <FormGroup
                    style={{
                      marginLeft: 15,
                    }}>
                    <Label for="category">??ffentlichkeit</Label>
                    <div className="form-check">
                      <input className="form-check-input" name="isPublic" type="checkbox" value="" id="defaultCheck1" onChange={e => this.setStatePublic(e)} />
                      <label className="form-check-label" htmlFor="defaultCheck1">
                        ??ffentlich
                      </label>
                    </div>
                  </FormGroup>
                  <FormGroup
                    style={{
                      marginLeft: 15,
                    }}>
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

                  <Form>
                    <FormGroup>

                      <Label
                      style={{
                        marginLeft:15
                      }}>Zutaten</Label>

                      <View style={{
                        //type="number"
                        placeholder:'Name',
                        flex: 1,
                        backgroundColor: 'white',
                      }}>
                        <ScrollView style={{
                          placeholder:'Name',
                          placeholder:"Name",
                          flex: 1,
                          marginBottom: 5
                        }}>
                          {this.state.inputs.map((input, key) => (
                            <View
                             style={{
                              // flexDirection: 'row',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              borderBottomWidth: 0,
                              borderBottomColor: "lightgray"
                            }}
                            >

                              {/* <Row> */}
                                {/* <Col> */}
                                  <StepZutat add={this.addNewRowZutat} delete={this.clickOnDeleteeZutat.bind(this)} stepZutat={stepZutat}></StepZutat>
                                {/* </Col> */}
                                {/* <Col>
                                  <Input style={{ marginRight: 15, padding: 10, marginTop: 10 }} type="name" placeholder={"Zutat"} onChangeText={(text) => inputHandler(text, key)} />
                                </Col>
                                <Col>
                                  <Input style={{ marginRight: 15, padding: 10, marginTop: 10 }} type="name" placeholder={"Menge"} onChangeText={(text) => inputHandler(text, key)} />
                                </Col> */}
                                {/* <Label for="exampleSelect">Select</Label> */}
                                {/* <Col>
                                  <Input style={{ marginRight: 15, padding: 10, marginTop: 10 }} className="form-control" type="select" placeholder="Einheit" name="select" id="exampleSelect">
                                    <option>kg</option>
                                    <option>l</option>
                                    <option>ml</option>
                                    <option>g</option>
                                    <option>Stk</option>
                                  </Input>
                                </Col> */}
                              {/* </Row> */}
                            </View>
                          ))}
                        </ScrollView>
                      </View>
                    </FormGroup>
                  </Form>

                  {/* <HomeScreen /> */}
                  {/* <Label for="ingredients">Ingredients</Label>
              <Input type="text" name="ingredients" id="ingredients" onChange={this.handleChange}/> */}

                  <FormGroup
                    style={{
                      marginLeft: 15,
                    }}>
                    <Label>Bearbeitungsschritte</Label>

                    <View style={{
                      flex: 1,
                      marginLeft: -10,
                      padding: 0,
                      backgroundColor: 'white',
                    }}>
                      <ScrollView style={{
                        flex: 1,
                        marginBottom: 10
                      }}>
                        {this.state.inputsSteps.map((input, key) => (
                          <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderBottomWidth: 0,
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
                                      <Steps add={this.addNewRoww} delete={this.clickOnDeletee.bind(this)} stepList={stepList} />
                                    </tbody>
                                  </Col>
                                </Row>
                              </FormGroup>
                            </Form>
                            {/* <Button color="red" title="Eintrag l??schen" onClick={() => deleteHandlerSteps(key)}>
                            </Button> */}
                          </View>
                        ))}
                      </ScrollView>
                    </View>

                  </FormGroup>

                  <FormGroup>
                    <Row>
                      <Col>
                        <Button title="Save Recipe" onPress={this.saveRecipe}></Button>
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
          <FooterMenu
            onPressHome={this.onPressHandlerHome}
            onPressFavoriten={this.onPressHandlerFavoriten}
            onPressEntdecken={this.onPressHandlerEntdecken}
            onPressHinzufuegen={this.onPressHandlerHinzufuegen}
            onPressUser={this.onPressHandlerUser}
            
            >
          </FooterMenu>
        </SafeAreaView>
      </form>
    );
  }
}

export default AddRecipe;
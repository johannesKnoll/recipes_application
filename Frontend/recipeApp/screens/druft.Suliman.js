
    return (
      <SafeAreaView
        showHorizontalScrollIndicator={false}
        showVerticalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: "white" }}
        onSubmit={this.handleSubmitt} onChange={this.handleChangee}
      >
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
                            <Row>
                              <Col>
                                <Input style={{ marginRight: 15, padding: 10, marginTop: 10 }} type="name" placeholder={"Zutat"} onChangeText={(text) => inputHandler(text, key)} />
                              </Col>
                              <Col>
                                <Input style={{ marginRight: 15, padding: 10, marginTop: 10 }} type="name" placeholder={"Menge"} onChangeText={(text) => inputHandler(text, key)} />
                              </Col>
                              {/* <Label for="exampleSelect">Select</Label> */}
                              <Col>
                                <Input style={{ marginRight: 15, padding: 10, marginTop: 10 }} className="form-control" type="select" placeholder="Einheit" name="select" id="exampleSelect">
                                  <option>kg</option>
                                  <option>l</option>
                                  <option>ml</option>
                                  <option>g</option>
                                  <option>Stk</option>
                                </Input>
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
                      <TaskList add={this.addNewRoww} taskList={taskList} />
                    </ScrollView>
                    <Button title="Neuer Schritt" onClick={(e) => addHandlerSteps(e)} />
                  </View>

                </FormGroup>
                <button onClick={this.addNewRow} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                <FormGroup>
                  <Row>
                    <Col>
                    <div className="card-footer text-center"> <button type="submit" className="btn btn-primary text-center">Submit</button></div>
                      
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
    );
  }
}

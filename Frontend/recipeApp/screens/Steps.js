import React, { useReducer } from "react"
import "./steps.css"
import './AddRecipe.css';
import { SafeAreaView, ScrollView, View, Button } from 'react-native';

const Steps = (props) => {
  return (
    props.stepList.map((val, idx) => {
      let description = `description-${idx}`
      return (
        <div key={val.index}>
          <ScrollView style={{
            flex: 1,
            marginBottom: 10
          }}>
            <input className="form-control-2" type="text" name="description" placeholder="Bearbeitungsschritt" data-id={idx} id={description} />

          </ScrollView>
          {
            idx === 0 ? <button onClick={() => props.add()} type="button"
              className="button_add">
              <i>Hinzufügen</i></button>
              :
              <div>
                <button onClick={() => props.add()} type="button"
                  className="button_add">
                  <i>Hinzufügen</i></button>
                <button className="button_delete"
                  onClick={(() => props.delete(val))} >
                  <div >Löschen</div>
                </button>
              </div>
          }
          {/* </td> */}
        </div >
      )
    })
  )
}
export default Steps
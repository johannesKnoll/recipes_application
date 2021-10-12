import React, { useReducer } from "react"
import "./steps.css"
import './AddRecipe.css';
import { SafeAreaView, ScrollView, View, Button } from 'react-native';

const StepZutat = (props) => {
  return (
    props.stepZutat.map((val, idx) => {
      let zutat = `zutat-${idx}`, menge= `menge-${idx}` ,einheit =`einheit-${idx}` 
      return (
        <div key={val.index}>
           {/* <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderBottomWidth: 0,
                            borderBottomColor: "lightgray",
                          }}>
                       */}
                      <ScrollView style={{
                        flex: 1,
                        marginBottom: 10
                      }}>
            <input className= "form-control-2" placeholder="Zutat" type="text"  name="zutat" data-id={idx} id={zutat}  />
         
         
          
            <input  className= "form-control-2" placeholder="Anzahl" type="text"  name="menge" data-id={idx} id={menge}  />
          
          {/* <td>
          
            <input type="text"  name="einheit" data-id={idx} id={einheit} className="form-control " />
          </td> */}
          {/* <td> */}
              <select name ="einheit" id={einheit} data-id={idx} className ="form-control-2 ">
              <option value ="kg">Einheit</option>
                  <option value ="kg">Kg</option>
                  <option value ="g">g</option>
                  <option value ="stk">Stk</option>
                  <option value ="L">L</option>
                  <option value ="ml">ml</option>
                  <option value ="Pr">Pr</option>
              </select>
          {/* </td> */}
          {/* <td> */}
          </ScrollView>
          {/* </View> */}
          {/* { */}
           
            <button onClick={()=>props.add()} type="button" 
            className="button_add">
              <i >Hinzufügen</i></button>
           
             <button className="button_delete" 
             onClick={(() => props.delete(val))} >
                 <div >Löschen</div>
                 </button>
           
          {/* </td> */}
        </div >
      )
    })
  )
}
export default StepZutat
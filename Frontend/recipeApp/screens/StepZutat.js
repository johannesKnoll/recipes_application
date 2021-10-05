import React, { useReducer } from "react"
import "./steps.css"
const StepZutat = (props) => {
  return (
    props.stepZutat.map((val, idx) => {
      let zutat = `zutat-${idx}`, menge= `menge-${idx}` ,einheit =`einheit-${idx}` 
      return (
        <tr key={val.index}>
          <td>    
            <input style={{marginRight: 20}} type="text"  name="zutat" data-id={idx} id={zutat} className="form-control " />
          </td>
          <td>
          
            <input style={{marginRight: 20}} type="text"  name="menge" data-id={idx} id={menge} className="form-control " />
          </td>
          {/* <td>
          
            <input type="text"  name="einheit" data-id={idx} id={einheit} className="form-control " />
          </td> */}
          <td>
              <select style={{marginRight: 20}} name ="einheit" id={einheit} data-id={idx} className ="form-control ">
                  <option value ="kg">Kg</option>
                  <option value ="g">g</option>
                  <option value ="stk">Stk</option>
                  <option value ="L">L</option>
                  <option value ="ML">ML</option>
                  <option value ="Br">Br</option>
              </select>
          </td>
          <td>
            
          {
            idx===0?<button onClick={()=>props.add()} type="button" 
            className="button_add">
              <i className="fa fa-plus-circle" >Hinzufügen</i></button>
            :
             <button className="button_delete" 
             onClick={(() => props.delete(val))} >
                 <div >Löschen</div>
                 </button>
            }
          </td>
        </tr >
      )
    })
  )
}
export default StepZutat
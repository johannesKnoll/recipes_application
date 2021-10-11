import React, { useReducer } from "react"
import "./steps.css"
const Steps = (props) => {
  return (
    props.stepList.map((val, idx) => {
      let description = `description-${idx}`
      return (
        <tr key={val.index}>
          <td>
          
            <input type="text"  name="description" placeholder="Bearbeitungsschritt" data-id={idx} id={description} className="form-control " />
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
export default Steps
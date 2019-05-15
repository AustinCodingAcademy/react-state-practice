import React from 'react';

let input = {

}
function InputForm(props){
  return (
      <div>
          First Name <input value={input.firstName} onChange={(e)=>{
             input.firstName = e.target.value;
             props.refresh();
          }}/> 
      </div>
  )
}

export default InputForm;
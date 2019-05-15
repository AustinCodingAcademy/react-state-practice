import React from 'react';

let state = {
  firstName:""
}
function ClassInputForm(props){
  return (
      <div>
          First Name <input value={state.firstName} onChange={(e)=>{
             state.firstName = e.target.value;
             props.refresh();
          }}/> 
      </div>
  )
}

export default ClassInputForm;
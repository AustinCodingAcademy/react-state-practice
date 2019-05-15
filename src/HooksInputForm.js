import React from 'react';

let state = {
  firstName:""
}
function HooksInputFrom(props){
  return (
      <div>
          First Name <input value={state.firstName} onChange={(e)=>{
             state.firstName = e.target.value;
             props.refresh();
          }}/> 
      </div>
  )
}

export default HooksInputFrom;
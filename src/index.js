import React from 'react';
import ReactDOM from 'react-dom';
import ClassInputForm from "./ClassInputForm";
import HooksInputForm from "./HooksInputForm";

function render(){
   ReactDOM.render(
     <div>
       <div>
            Class
            <div>
                Person 1
                <ClassInputForm refresh={render}/>
            </div>
            <div>
                Person 2
                <ClassInputForm refresh={render}/>
            </div>
       </div>
       <hr/>
       <div style={{marginTop:"30px"}}>
            Hooks
            <div>
                Person 1
                <HooksInputForm refresh={render}/>
            </div>
            <div>
                Person 2
                <HooksInputForm refresh={render}/>
            </div>
       </div>
    </div>
       
       
       , document.getElementById('root'));

}
render();


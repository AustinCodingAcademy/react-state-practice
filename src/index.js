import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import InputForm from "./InputForm";

function render(){
   ReactDOM.render(<div>
       <App />
       <div>
           Person 1
           <InputForm refresh={render}/>
       </div>
       <div>
          Person 2
          <InputForm refresh={render}/>
       </div>
       </div>, document.getElementById('root'));

}
render();


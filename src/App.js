
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TexttForm';
import React, { useState } from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
  
  } from "react-router-dom";


function App() {
  const[mode , setMode] = useState('light');
  const[alert, setAlert] = useState('null');

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
  }, 3000);
}
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Enabled" , "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled" , "success");

    }
  }
  return (
    <>
     
     <Navbar title ="TextEditor" mode={mode} toggleMode= {toggleMode}/>
     <Alert alert={alert}/>
     <div className="container my-3">
     
     {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
        
          <Route path="/">

          </Route>
        </Switch> */}
       
     </div>
              <TextForm showAlert={showAlert} heading="Enter the text here" mode={mode}/>

    </>
    
  );
}

export default App;

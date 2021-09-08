
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform.js'
// import Alert from './components/Alert.js';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  const[mode,setMode]=useState('light')
  const[modeText,setModeText]=useState('dark')
  const[textmode,setTextMode]=useState('Enable Dark Mode');
const[textColor,setTextColor]=useState('white');
  const[alert,setAlert]=useState(null)


 const showAlert= function (message,type) {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode=()=>{
    if (mode==='light') {
      setTextMode("Disable light mode")
      setModeText("light");
      document.body.style.backgroundColor="#091c38"
      document.body.style.color="white";
      
      setMode("dark")
      showAlert("Dark Mode has been enabled","success")
      
    }
    else{
      
      setModeText("dark")
      setTextMode("Enable light mode")
      setMode("light")
      showAlert("Light Mode has been enabled","success")
      document.body.style.color="black"
      document.body.style.backgroundColor="white"
    }
  }
  return (
    <>
<Navbar modeText={modeText} title="Textutils" textmode={textmode} aboutText="About Textutils" mode={mode} toggleMode={toggleMode}/>
 <Textform  setTextColor={setTextColor} textColor={textColor} showAlert={showAlert} mode={mode} title="Enter your text here " />

    </>
  
  );
}

export default App;

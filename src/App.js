// import logo from './logo.svg';
import './App.css';
import About from './components/About'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react'
import Alerts from './components/Alerts';

// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router,Link, Route, Switch } from "react-router-dom";

function App() {
  const [mode,setMode ] = useState('light');
  const [alert, setAlert] = useState(null);
  // const [Dark, setDark] = useState("light");
  // const [Grey, setGrey] = useState("Default");
  // const [Green, setGreen] = useState("Default");
  
  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  // const [option1, setoption1] = useState("true");
  // const [option2, setoption2] = useState("false");
  // const [option3, setoption3] = useState("false");
  const toggleMode = ()=>{
    if (mode === "dark"){
      document.body.style.backgroundColor = "white";
      showAlert("Light mode set-up","success");
      setMode("light");
    }
    else{
      document.body.style.backgroundColor = "#264f30";
      showAlert("Dark mode set-up","success");
      setMode("dark");
    }
  }
  

  return (
    <>
    <Navbar title="First App " toggleMode = {toggleMode} mode = {mode}/> 
        <Alerts alert={alert} />
        <Router>
        <Route exact path="/" component={Textform}></Route>
        {/* <Textform mode={mode} showAlert = {showAlert}/> */}
        <Route exact path="/about" component={About}></Route>
        {/* <About /> */}
        </Router>
        
    </>
  );
  };


export default App;

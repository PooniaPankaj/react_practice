import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function  Navbar(props) {
  // console.log(props.mode);
  function hello(){
    console.log("hello");
  }
  return (
      

    <div>
         <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="submit" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
            {/* <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label className="form-check-label" htmlFor="inlineRadio1">Dark Mode 2</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onClick={props.toggleMode("green")} />
                <label className="form-check-label" htmlFor="inlineRadio2">Dark Mode 1</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
              </div> */}
          {/* <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" id="customSwitches" />
            <label className="custom-control-label" htmlFor="customSwitches" onClick={props.toggleModeGrey} style={{color:props.mode==="light"?"black":"white"}}>Dark Mode</label>
          </div> */}
          {/* <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" for="flexRadioDefault1">
                Default radio
              </label>
            </div> */}

          {/* <div className="form-check form-switch mx-4">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleModeGreen} style={{color:props.mode==="light"?"black":"white"}} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" onClick={props.toggleModeGreen} style={{color:props.mode==="light"?"black":"white"}} >Green Dark Mode</label>
          </div>
          <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
              <label className="form-check-label" htmlFor="exampleRadios1">
                Default radio
              </label>
            </div> */}
          <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" id="customSwitches" />
            <label className="custom-control-label" htmlFor="customSwitches" onClick={props.toggleMode} style={{color:props.mode==="light"?"black":"white"}}>Green Dark Mode</label>
          </div>

            {/* <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
          </div>
        </nav> 
    </div>
  )
};

import React,{useState} from 'react'

export default function Textform(props) {
    const [text,setText ] = useState('Enter Text here ! ');
    const handleUpClick  = ()=>{
        console.log("Clicked");
        // setText("you clicked on handle")
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    // setText("changed");
  return (
    
    <div>
        
        <h1>
            {props.heading}
        </h1>
        <form>
        <div className="form-group">
            {/* <label for="myBox">Example textarea</label> */}
            <textarea className="form-control" value={text} onChange = { handleOnChange} id="myBox" rows="3"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick} type="button">Convert to Uppercase</button>
        </form>
      
    </div>
  )
}

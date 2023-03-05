import React,{useState} from 'react'

export default function Textform(props) {
    const [text,setText ] = useState('Enter Text here ! ');
    var sentence = 0;
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
    const handlelowerClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const ClearText = ()=>{
        let newText = "";
        setText(newText);
    }
    // const CountSentence = ()=>{
    //     // var fullStopCount = (text).val().match(new RegExp(".")).length;
    //     // var fullStopCount = (text).val().match(/\./g).length;
        
    //     var fullStopCount = 0;
    //     text.forEach(myFunction);
    //     function myFunction(t){
    //         if (t === ".")fullStopCount+=1;
    //     }
    //     console.log(fullStopCount);
    //     sentence = fullStopCount;
    // }
    const handleExtraSpace = ()=>{
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    
    // setText("changed");
  return (
    <>
        <div className='container'>
            
            <h2>
                {props.heading}
            </h2>
            <form>
            <div className="form-group">
                {/* <label for="myBox">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange = { handleOnChange} id="myBox" rows="3"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} type="button">Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handlelowerClick} type="button">Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={ClearText} type="button">Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpace} type="button">Remove extra space</button>
            
            </form>
        
        </div>
        <div className="container my-4">
             <h2>Your Text summary is </h2>
             <p>
                Number of words is {text.split(" ").length} and {text.length} characters 
             </p>

                <h2>Preview</h2>
                <p>{text}</p>
                <h2>Sentence</h2>
                <p>{sentence}</p>

        </div>
    </>
  )
}

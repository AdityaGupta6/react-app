import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
    let [text,setText] = useState("")
    let greyStyle={
        backgroundColor:props.mode==='dark'?'#091c38':'white',
        color:props.mode==='dark'?'white':'black'
    }

  
    
 const handleUpClick=()=>{
 
     let uppercaseText=text.toUpperCase()
     setText(uppercaseText)
     props.showAlert("Your text has converted in Upper Case","success")
    }
    
    const handleClClick=()=>{
     props.showAlert("The text is clear now","success")
 

     setText("")
    }
 const handleLoClick=()=>{
 
     let lowercaseText=text.toLowerCase()
     setText(lowercaseText)
     props.showAlert("The text has converted in Lower Case","success")

    }
  
 const handleCopyClick=()=>{
 let text=document.getElementById('myBox');
 text.select();
 navigator.clipboard.writeText(text.value);
 props.showAlert("The text has copied to clipboard","success")

    }
  
    const handleOnChange=(event)=>{

        setText(event.target.value)
 }

    return (
        <>
        <div className="container mt-3">
            <h2>{props.title}</h2>
<div >
  <label htmlFor="myBox" className="form-label"></label>
  <textarea  className="form-control" onChange={handleOnChange} id="myBox" rows="13" value={text} placeholder="Enter your text" style={greyStyle} ></textarea>
</div>
<button  id="up" className="my-3 btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
<button  id="lo" className="my-3 mx-3 btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
<button  id="cl" className="  btn btn-primary" onClick={handleClClick}>Clear the text</button>
<button  id="co" className="  mx-3 btn btn-primary" onClick={handleCopyClick}>Copy the text</button>
</div>
<div className="container my-2">
    <h1>Your text summary</h1>
    <p>{text.endsWith(' ')?text.split(' ').length-1:text.split(' ').length} words and {text.length} characters</p>
    <p>{text.split(' ').length * 0.008} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
        </>
    )
}
Textform.propTypes={
    title:PropTypes.string.isRequired
 
}
  
  Textform.defaultProps={
    title:"Set title here"
   } 


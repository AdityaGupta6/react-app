import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'



function Navbar(props) {
  let myStyle2={
cursor:'pointer'
  }
  const redOnclick=function(){
    document.body.style.color="#eab7b7";
    document.body.style.backgroundColor="#841010";

    document.getElementById('myBox').style.backgroundColor="#841010"
    document.getElementById('myBox').style.color="white";
    document.getElementById('up').style.backgroundColor="#da1616";
    document.getElementById('lo').style.backgroundColor="#da1616";
    document.getElementById('cl').style.backgroundColor="#da1616";
    document.getElementById('co').style.backgroundColor="#da1616";
  }
  const greenOnclick=()=>{
    document.body.style.backgroundColor="#0e4818"
    document.body.style.color="#caf9d6";
    document.getElementById('myBox').style.backgroundColor="#0e4818"
    document.getElementById('myBox').style.color="white";

    document.getElementById('up').style.backgroundColor="green";
    document.getElementById('lo').style.backgroundColor="green";
    document.getElementById('cl').style.backgroundColor="green";
    document.getElementById('co').style.backgroundColor="green";
  }
  const blueOnclick=()=>{
    document.body.style.backgroundColor="#091c38"
    document.getElementById('myBox').style.backgroundColor="#091c38"
    document.getElementById('myBox').style.color="white";
 
    document.body.style.color="#d5c7f1";

    document.getElementById('up').style.backgroundColor="blue";
    document.getElementById('lo').style.backgroundColor="blue";
    document.getElementById('cl').style.backgroundColor="blue";
    document.getElementById('co').style.backgroundColor="blue";
  }
  const blackOnclick=()=>{
    document.body.style.backgroundColor="#2a2c2f"
    document.getElementById('myBox').style.backgroundColor="#2a2c2f"
    document.getElementById('myBox').style.color="white";
    document.body.style.color="#6f7571";

    document.getElementById('up').style.backgroundColor="#2b2b2f";
    document.getElementById('lo').style.backgroundColor="#2b2b2f";
    document.getElementById('cl').style.backgroundColor="#2b2b2f";
    document.getElementById('co').style.backgroundColor="#2b2b2f";
  }
    return(
<>
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
        </li>
       
        
       
      </ul>
      <div className={`text-${props.modeText} form-check form-switch`}>
  <input onClick={props.toggleMode} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" style={myStyle2}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault ">{props.textmode}</label>
</div>
<div style={{display: "flex"}}>
<div onClick={redOnclick} className="mx-1 rounded-circle" id="red" style={{backgroundColor:"red",width:"20px",height:"20px",cursor:"pointer"}}>

</div>
  
<div onClick={blueOnclick} className="mx-1 rounded-circle" id="blue" style={{backgroundColor:"blue",width:"20px",height:"20px",cursor:"pointer"}}>

</div>
<div onClick={greenOnclick} className="mx-1 rounded-circle" id="green" style={{backgroundColor:"green",width:"20px",height:"20px",cursor:"pointer"}}>

</div>
<div onClick={blackOnclick} className="mx-1 rounded-circle" id="black" style={{backgroundColor:"#191c21",width:"20px",height:"20px",cursor:"pointer"}}>

</div>
</div>
</div>
    </div>
  
</nav>
</>
    );
}
//It will be set the type of the poptype
Navbar.propTypes={
  // title:PropTypes.string,

  // it will throw error when there proptype is empty 

  //it shouldusually use in react app
  title:PropTypes.string.isRequired,

  aboutText:PropTypes.string.isRequired

}
//It will set default value for proptype
Navbar.defaultProps={
  title:"Set title here",
  aboutText:"About"
}
export default Navbar









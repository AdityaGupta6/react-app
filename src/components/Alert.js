import React from 'react'

export default function Alert(props) {
    const capitalize=(string)=>{
        let newStr=string.charAt(0).toUpperCase()+string.slice(1);
        return newStr;
    }
    return (
        props.desc && <div>
<div className={`alert alert-${props.desc.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.desc.type)}! </strong>{props.desc.msg}
 
</div> 
        </div>
    )
}


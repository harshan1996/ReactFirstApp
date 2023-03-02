import React from "react";


const Button=(props)=>{
    console.log(props);
    return (<div><button style={{backgroundColor:props.buttonColor,color:"white", fontSize: "20px",padding: "10px 24px",borderRadius:"30px"}}>{props.children}{props.buttonText}</button></div>)
}

export default Button
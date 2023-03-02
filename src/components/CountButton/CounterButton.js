import React,{useState,useEffect} from "react";
import "./CounterButton.css"


const CountButton = (props) => {
    // console.log(props)
    const [currentCount, setCurrentCount]=useState(0)

    const CountHandler= () =>{ setCurrentCount(currentCount+props.incrementBy)}

    const buttonStyle={
        backgroundColor:props.buttonColor,
        borderRadius: props.borderRadius
    }
    useEffect(()=>{
        // console.log("mounted the component")
    },[])

    useEffect(()=>{
        // console.log("mounted the component or clicked the countbutton")
    },[currentCount]) // currentCount is inside the dependency array[]

    return <div>
        <button style={buttonStyle} onClick={CountHandler}> +{props.incrementBy} </button> <br/>
        <div className="count-display"> {currentCount}</div>
    </div>
}

export default CountButton
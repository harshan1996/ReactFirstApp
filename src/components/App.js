import React,{useState,useEffect} from "react";
import QueryBar from "./SearchBar/SearchBar";
import CountButton from "./CountButton/CounterButton";
import Button from "./Button/Button";


// let dailyUtilities = ["toothbrush", "toothpaste", "underwear", "shirt", "phone", "tshirts"]

let dailyUtilitiesTwo = ["apple", "orange", "banana", "citrus", "grapes", "watermelon"]

const App = () => {
    const [Utilities,setUtilities]=useState([])

    // useEffect(()=>{
    //     fetch('https://fakestoreapi.com/products/category/jewelery').then((res)=>
    //     res.json()).then((products)=>{
    //         const Utilitiesrevamped=products.map((product)=>{
    //             return product.title
    //         })
    //         setUtilities(Utilitiesrevamped)
    //      })})
       


    //     setTimeout(()=>{
    //         setUtilities(dailyUtilities)
    //     },2000)
    // },[])

    let lengthOfUtilities=Utilities.length>0

    return <div>
        {lengthOfUtilities? < QueryBar utilities={Utilities} />:"loading..."}
        <QueryBar utilities={dailyUtilitiesTwo} />
        <CountButton incrementBy={+2} borderRadius="100px" buttonColor="yellow"/>
        <Button buttonColor="yellow">Children Button</Button><br/>
        <Button buttonColor="red" buttonText="button2"/>
    </div>
}

export default App
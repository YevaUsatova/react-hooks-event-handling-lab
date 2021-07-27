// Code Keypad Component Here
import React from "react"
import ReactDOM from "react-dom"

function Keypad(){
   function setInput() {( console.log("Entering password..."))};
    return( 
        <input type="password" onChange={ setInput}/>    )
}
export default Keypad
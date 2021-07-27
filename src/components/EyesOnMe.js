// Code EyesOnMe Component Here
import React from "react"

function EyesOnMe(){
    function buttonHendelearFocus(){
        console.log("Good!")
    }
    function buttonBlur(){
        console.log("Hey! Eyes on me!")
    }
    return (
        <button onFocus={buttonHendelearFocus} onBlur={buttonBlur} >Eyes on me</button>
    )
}
export default EyesOnMe;
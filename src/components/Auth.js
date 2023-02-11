import React from 'react'
import { auth } from "../config/firebase"; 
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react";


function Auth() {

    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 


    // sign in with admin's user/password
    const handleSignIn = async () => {
      await createUserWithEmailAndPassword(auth, email, password)
      
    }

  return (
    <div>
        <input 
          type="text"
          placeholder="enter email..." 
          onChange={(e) => {setEmail(e.target.value)}}
          />
        <input 
          type="password"
          placeholder="enter password..."
          onChange={(e) => {setPassword(e.target.value)}}
          />
        <button onClick={() => {handleSignIn()}}>Sign In</button>
    </div>
  )
}

export default Auth
import React from 'react'
import "./CSS/KeyGenerator.css"
import { useNavigate } from 'react-router-dom'
const KeyGenerator = () => {
    const navigate = useNavigate()
    handleNavigate = ()=>{
        navigate("/login")
    }
  return (
    <div className='KeyGeneratorMain'>
        <div className="KeyBox">
            <div className="key"> absu%fs#Saoj </div>
            <p>Copy this and share to the employee whom you wanted to add in you room.</p>
            <p>The room key is also available in your profile </p>
        </div>
        <button onClick={handleNavigate}>Let's go</button>
    </div>
  )
}

export default KeyGenerator
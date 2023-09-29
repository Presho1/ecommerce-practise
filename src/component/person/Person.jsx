import React from 'react'
import './person.css'

const Person = (props) => {
    
  return (

    <div>
        <h1>My name is {props.name} I have {props.child} children.</h1>
        <img src={props.image} alt="" className='myImage' />
    </div>
  )
}

export default Person
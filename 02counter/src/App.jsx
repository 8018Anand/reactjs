import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]= useState(0);
  //counter is vaiable and setCounter is function
  //since we are given a const to the variable dont thing that we cant update the value
  //value can be updated because eachtime we update the value it will create a new state of the variable
  
  //let counter = 15;

  const addvalue = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    //this generally will not work because it will update the value only once why...?
    //to update the value multiple times use below syntax
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);  //using callback functions 
  }
  const removeValue = () => {
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>React course with hitish {counter}</h1>
      <h2>counter value: {counter}</h2>
      <button
        
        onClick = {addvalue}
      >Add value</button>
      <button
        onClick = {removeValue}
      >remove Value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App

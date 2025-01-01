import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  const obj = {
    name: "Anand",
    age: 20
  }

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        vite with tailwind
      </h1>
      <Card userName = "Anand"/>
      {/* <Card arr = [1, 2, 3]/>  */} {/* This will throw an error because array is not a valid prop
      but we can still pass array as a prop by {} as shown below*/}
      <Card arr = {[1, 2, 3]}/> {/*the better way is to send objects and array is first create a variable and then pass it as a prop */}
      <Card object = {obj}/>
    </>
  );
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  //let counter = 15

  const addValue = () => {
    //console.log("value added", Math.random());
    
    if (counter < 20) {
      counter = counter + 1
      setCounter(counter)
      console.log("clicked", counter );
    }
  }
  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1
      setCounter(counter)
      console.log("clicked", counter );
    }
    
  }

  return (
   <>
    <h1>chai aur anuj</h1>
    <h2>counter value: {counter}</h2>

    <button 
    onClick={addValue}
    >increase value {counter}</button>
    <br />
    <button
    onClick={removeValue}
    >decrease value {counter}</button>
    <p>footer: {counter}</p>
   </>
  )
}

export default App

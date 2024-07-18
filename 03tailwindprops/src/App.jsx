import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username: "anuj",
    age: 22
  }
  let newArr = [1,2,3,4]
  return (
    <>
      <h1 className='bg-green-400 rounded-xl '>Hello Tailwind</h1>
      <Card username="anuj sony" btnText="click me"/>
      <Card username="chaiauranuj" btnText="visit me"/>

    </>
  )
}

export default App
